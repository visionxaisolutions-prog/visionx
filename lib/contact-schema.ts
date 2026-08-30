import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website",
  "UGC / Content",
  "Product Photography",
  "3D Property Tour",
  "Social Media",
  "WhatsApp Automation",
  "AI Solutions",
  "Custom Software",
  "E-commerce",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹15K",
  "₹15K–₹30K",
  "₹30K–₹50K",
  "₹50K+",
  "Not sure",
] as const;

export const contactFieldsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .max(200, "Email is too long.")
    .email("Enter a valid email address."),
  service: z.enum(SERVICE_OPTIONS, {
    message: "Please select a service.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(5000, "Message is too long — please keep it under 5000 characters."),
  business: z.string().trim().max(150, "That's too long.").optional().or(z.literal("")),
  phone: z.string().trim().max(30, "That's too long.").optional().or(z.literal("")),
  budget: z.enum(BUDGET_OPTIONS).optional().or(z.literal("")),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm you agree to how we handle your data.",
  }),
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
