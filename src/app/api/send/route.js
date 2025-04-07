import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port:587, // or use "smtp.mailtrap.io", etc.
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: [process.env.SMTP_EMAIL, email],
    subject: subject,
    html: `
      <h1>${subject}</h1>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>From:</strong> ${email}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
