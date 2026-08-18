"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().min(1, "Please enter your email.").email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactForm({
  initialPlan,
}: {
  initialPlan?: string;
}) {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: initialPlan
        ? `Hi, I'm interested in the ${initialPlan} plan. `
        : "",
    },
  });

  async function onSubmit(values: ContactValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, plan: initialPlan }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Message sent!", {
        description: "Thanks for reaching out — we'll get back to you soon.",
      });
      form.reset({
        name: "",
        email: "",
        message: initialPlan
          ? `Hi, I'm interested in the ${initialPlan} plan. `
          : "",
      });
    } catch (err) {
      toast.error("Couldn't send your message", {
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
      });
    }
  }

  return (
    <form
      className="contact-form reveal"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
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
      {initialPlan && (
        <Badge className="mb-4 bg-(--primary-soft) text-(--accent-dark)">
          Enquiring about the <strong>{initialPlan}</strong> plan
        </Badge>
      )}
      <FieldGroup>
        <Field data-invalid={!!form.formState.errors.name}>
          <FieldLabel htmlFor="contactName">Your Name</FieldLabel>
          <Input
            id="contactName"
            placeholder="Jane Doe"
            aria-invalid={!!form.formState.errors.name}
            {...form.register("name")}
          />
          <FieldError errors={[form.formState.errors.name]} />
        </Field>
        <Field data-invalid={!!form.formState.errors.email}>
          <FieldLabel htmlFor="contactEmail">Your Email</FieldLabel>
          <Input
            id="contactEmail"
            type="email"
            placeholder="jane@company.com"
            aria-invalid={!!form.formState.errors.email}
            {...form.register("email")}
          />
          <FieldError errors={[form.formState.errors.email]} />
        </Field>
        <Field data-invalid={!!form.formState.errors.message}>
          <FieldLabel htmlFor="contactMessage">Your Message</FieldLabel>
          <Textarea
            id="contactMessage"
            placeholder="Tell us a bit about your project..."
            rows={5}
            aria-invalid={!!form.formState.errors.message}
            {...form.register("message")}
          />
          <FieldError errors={[form.formState.errors.message]} />
        </Field>
      </FieldGroup>
      <Button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}{" "}
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
      </Button>
    </form>
  );
}
