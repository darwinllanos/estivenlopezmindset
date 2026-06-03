import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASSWORD;
const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort ? Number(smtpPort) : 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

export async function POST(req: Request) {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "El servidor de correo no está configurado. Agrega SMTP_HOST, SMTP_PORT, SMTP_USER y SMTP_PASSWORD." },
      { status: 500 },
    );
  }

  const body = await req.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!name || !email) {
    return NextResponse.json({ error: "Nombre y correo son obligatorios." }, { status: 400 });
  }

  const mailOptions = {
    from: smtpFrom,
    to: email,
    subject: "Masterclass gratuitas: tu acceso a la clase ya está listo",
    text: `Hola ${name},

Gracias por inscribirte. Aquí tienes tu Masterclass gratuita:
https://www.youtube.com/@estivenlopezmindset/search?query=masterclas

Si deseas, también te escribiremos pronto para ayudarte con tu proceso.

Saludos,
Estiven López MindSet`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
        <p>Hola ${name},</p>
        <p>Gracias por registrarte. Aquí tienes tu <strong>Masterclass gratuita</strong>:</p>
        <p><a href="https://www.youtube.com/@estivenlopezmindset/search?query=masterclas" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@estivenlopezmindset/search?query=masterclas</a></p>
        <p>Te escribiremos pronto con más información.</p>
        <p>Saludos,<br/>Estiven López MindSet</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Revisa la configuración SMTP." },
      { status: 500 },
    );
  }
}
