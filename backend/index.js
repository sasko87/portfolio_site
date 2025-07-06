const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
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
  const { name, email, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      subject: subject,
      text: message, // plain‑text body
    });
    res.status(200).send({
      message:
        "Message sent successfully. Thank you for contacting me. I’ll get back to you as soon as possible.",
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
  console.log("Server is running on port 3000");
});
