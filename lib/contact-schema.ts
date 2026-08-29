import { z } from "zod";

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
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(5000, "Message is too long — please keep it under 5000 characters."),
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
