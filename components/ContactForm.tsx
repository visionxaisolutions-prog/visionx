"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const text = encodeURIComponent(
      `New enquiry from ${name}\n\n${message}\n\nReply to: ${email}`
    );
    const url = `https://wa.me/917676520441?text=${text}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked (common on Safari/Mac) — fall back to same-tab navigation.
      window.location.href = url;
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="plane-decor" aria-hidden="true">
        <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.0" cy="180.0" r="1.00" fill="#FF6A00" fillOpacity="0.25" />
          <circle cx="18.8" cy="173.4" r="1.06" fill="#FF6A00" fillOpacity="0.27" />
          <circle cx="27.6" cy="166.8" r="1.12" fill="#FF6A00" fillOpacity="0.29" />
          <circle cx="36.4" cy="160.2" r="1.18" fill="#FF6A00" fillOpacity="0.31" />
          <circle cx="45.2" cy="153.8" r="1.25" fill="#FF6A00" fillOpacity="0.33" />
          <circle cx="54.0" cy="147.5" r="1.31" fill="#FF6A00" fillOpacity="0.35" />
          <circle cx="62.8" cy="141.4" r="1.37" fill="#FF6A00" fillOpacity="0.37" />
          <circle cx="71.6" cy="135.5" r="1.43" fill="#FF6A00" fillOpacity="0.38" />
          <circle cx="80.4" cy="129.8" r="1.49" fill="#FF6A00" fillOpacity="0.40" />
          <circle cx="89.2" cy="124.4" r="1.55" fill="#FF6A00" fillOpacity="0.42" />
          <circle cx="98.0" cy="119.2" r="1.62" fill="#FF6A00" fillOpacity="0.44" />
          <circle cx="106.8" cy="114.4" r="1.68" fill="#FF6A00" fillOpacity="0.46" />
          <circle cx="115.6" cy="109.9" r="1.74" fill="#FF6A00" fillOpacity="0.48" />
          <circle cx="124.4" cy="105.7" r="1.80" fill="#FF6A00" fillOpacity="0.50" />
          <circle cx="133.2" cy="101.8" r="1.86" fill="#FF6A00" fillOpacity="0.52" />
          <circle cx="142.0" cy="98.3" r="1.92" fill="#FF6A00" fillOpacity="0.54" />
          <circle cx="150.8" cy="95.2" r="1.98" fill="#FF6A00" fillOpacity="0.56" />
          <circle cx="159.6" cy="92.5" r="2.05" fill="#FF6A00" fillOpacity="0.58" />
          <circle cx="168.4" cy="90.1" r="2.11" fill="#FF6A00" fillOpacity="0.60" />
          <circle cx="177.2" cy="88.1" r="2.17" fill="#FF6A00" fillOpacity="0.62" />
          <circle cx="186.0" cy="86.4" r="2.23" fill="#FF6A00" fillOpacity="0.63" />
          <circle cx="194.8" cy="85.1" r="2.29" fill="#FF6A00" fillOpacity="0.65" />
          <circle cx="203.6" cy="84.1" r="2.35" fill="#FF6A00" fillOpacity="0.67" />
          <circle cx="212.4" cy="83.4" r="2.42" fill="#FF6A00" fillOpacity="0.69" />
          <circle cx="221.2" cy="83.1" r="2.48" fill="#FF6A00" fillOpacity="0.71" />
          <circle cx="230.0" cy="83.0" r="2.54" fill="#FF6A00" fillOpacity="0.73" />
          <g transform="translate(216.0,68.98147277795397) rotate(-18)">
            <path
              d="M0 14 L28 0 L10 6 L6 16 L3 11 Z"
              fill="none"
              stroke="#FF6A00"
              strokeWidth={2.2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <div className="form-title">Send Us a Message</div>
      <div className="field">
        <label className="sr-only" htmlFor="contactName">
          Your Name
        </label>
        <input type="text" id="contactName" name="name" placeholder="Your Name" required />
      </div>
      <div className="field">
        <label className="sr-only" htmlFor="contactEmail">
          Your Email
        </label>
        <input type="email" id="contactEmail" name="email" placeholder="Your Email" required />
      </div>
      <div className="field">
        <label className="sr-only" htmlFor="contactMessage">
          Your Message
        </label>
        <textarea id="contactMessage" name="message" placeholder="Your Message" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message{" "}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}
