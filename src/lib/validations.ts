import { z } from 'zod';

// Appointment/Booking form validation
export const appointmentSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'.,-]+$/, { message: "Name contains invalid characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[\d\s+()-]+$/, { message: "Invalid phone number format" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .optional()
    .or(z.literal('')),
  condition: z.string()
    .trim()
    .min(1, { message: "Please select a condition" })
    .max(100, { message: "Condition is too long" }),
  preferred_date: z.string().optional().or(z.literal('')),
  preferred_time: z.string().optional().or(z.literal('')),
  message: z.string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional()
    .or(z.literal(''))
});

// Contact inquiry validation
export const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255)
    .optional()
    .or(z.literal('')),
  subject: z.string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

// Newsletter signup validation
export const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email is too long" })
});

// Testimonial submission validation
export const testimonialSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  condition: z.string()
    .trim()
    .min(2, { message: "Please specify the condition" })
    .max(100),
  testimonial: z.string()
    .trim()
    .min(20, { message: "Testimonial must be at least 20 characters" })
    .max(2000, { message: "Testimonial must be less than 2000 characters" }),
  location: z.string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal('')),
  rating: z.number().min(1).max(5).optional(),
  is_anonymous: z.boolean().optional()
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type TestimonialFormData = z.infer<typeof testimonialSchema>;
