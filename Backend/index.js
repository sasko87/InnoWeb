const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const OpenAI = require("openai");

require("dotenv").config();


app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendContactMail = async (req, res) => {
  const { name, email, service, message, phone } = req.body;
  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      subject: `New order for ${service}`,
      text: `New mail from ${name}, ${email}, ${phone}, Message: ${message}`, // plain‑text body
    });
    res.status(200).send({
      message: "Thank you for contacting us! We will get back to you soon.",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again in a moment." });
  }
};

app.post("/api/send-mail", sendContactMail);

// AI Chatbot implementation
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function buildMessages(
  conversation = [],
  systemPrompt = null,
  maxMessages = 12
) {
  const trimmed = conversation.slice(-maxMessages);
  const messages = [];
  if (systemPrompt) messages.push({ role: "system", content: systemPrompt });

  for (const m of trimmed) {
    if (!m || !m.text) continue;
    if (m.sender === "user") messages.push({ role: "user", content: m.text });
    else messages.push({ role: "assistant", content: m.text });
  }
  return messages;
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("send_message", async (payload) => {
    const requestId =
      payload?.requestId ||
      `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    try {
      const conversation = Array.isArray(payload?.conversation)
        ? payload.conversation
        : [{ sender: "user", text: payload?.msg ?? "" }];

      const systemPrompt =
        "You are a helpful assistant for 'Mentor Token' — answer clearly and concisely, provide code examples when asked, and when unsure ask clarifying questions.";

      const messages = buildMessages(conversation, systemPrompt, 12);

      const options = payload?.options || {};
      const response = await client.chat.completions.create({
        model: options.model || "gpt-3.5-turbo",
        messages,
        temperature:
          typeof options.temperature === "number" ? options.temperature : 0.2,
        max_tokens:
          typeof options.max_tokens === "number" ? options.max_tokens : 600,
      });

      const reply =
        response.choices?.[0]?.message?.content ??
        "Sorry, I couldn't generate a response.";

      socket.emit("receive_message", { reply, requestId });
      console.log(`Reply sent for ${requestId} to ${socket.id}`);
    } catch (err) {
      console.error(
        "OpenAI error:",
        err?.response?.data || err?.message || err
      );
      socket.emit("receive_message", {
        reply: "⚠️ Error getting AI response.",
        requestId,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
