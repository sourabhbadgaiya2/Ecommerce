import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.MAIL_ID,
      pass: config.MAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: "Hey <abc@.com>",
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  });
});

export default sendEmail;
