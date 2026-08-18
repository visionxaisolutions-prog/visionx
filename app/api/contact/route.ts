import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, plan } = await req.json();
  const planName = typeof plan === "string" && plan.trim() ? plan.trim() : null;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"VisionXAI Website" <${user}>`,
      to,
      replyTo: email,
      subject: planName
        ? `New enquiry from ${name} — ${planName} plan`
        : `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}${
        planName ? `\nPlan: ${planName}` : ""
      }\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${planName ? `<p><strong>Plan:</strong> ${escapeHtml(planName)}</p>` : ""}
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
