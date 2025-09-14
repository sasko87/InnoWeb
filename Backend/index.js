const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
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

app.listen(3000, () => {
  console.log("server is running");
});
