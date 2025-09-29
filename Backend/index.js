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

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
 socket.on("send_message", async (msg) => {
    try {
      const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: msg }],
        max_tokens: 200,
      });
       const reply = response.choices[0].message.content;
      socket.emit("receive_message", reply);
    } catch (err) {
      console.error("OpenAI error:", err.response?.data || err.message);
      socket.emit("receive_message", "⚠️ Error getting AI response.");
    }
  });
  
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
