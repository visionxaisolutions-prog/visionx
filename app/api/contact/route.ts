import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFieldsSchema } from "@/lib/contact-schema";

// Best-effort, in-memory rate limit. Resets on cold start and is per-instance
// (Vercel can route requests to different instances), so it won't stop a
// determined/distributed attacker — but it does stop the common case of a
// single bot or script hammering the endpoint. A proper fix would use a
// shared store (Upstash/Redis) if this ever needs to be airtight.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never see or fill in. Bots that
  // blindly fill every input will trip it. Pretend success so we don't tip
  // off scripts checking the response.
  const honeypot = "company" in body ? body.company : undefined;
  if (typeof honeypot === "string" && honeypot.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactFieldsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid input." },
      { status: 400 }
    );
  }
  const { name, email, service, message, business, phone, website, budget } =
    parsed.data;

  const rawPlan = "plan" in body ? body.plan : undefined;
  const planName =
    typeof rawPlan === "string" && rawPlan.trim()
      ? rawPlan.trim().slice(0, 50)
      : null;

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
        : `New enquiry from ${name} — ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}${
        planName ? `\nPlan: ${planName}` : ""
      }${business ? `\nBusiness: ${business}` : ""}${
        phone ? `\nPhone: ${phone}` : ""
      }${website ? `\nWebsite/Instagram: ${website}` : ""}${
        budget ? `\nBudget: ${budget}` : ""
      }\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Service:</strong> ${escapeHtml(service)}</p>
${planName ? `<p><strong>Plan:</strong> ${escapeHtml(planName)}</p>` : ""}
${business ? `<p><strong>Business:</strong> ${escapeHtml(business)}</p>` : ""}
${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
${website ? `<p><strong>Website/Instagram:</strong> ${escapeHtml(website)}</p>` : ""}
${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
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
