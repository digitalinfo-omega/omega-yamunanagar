import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(10, "Contact number is required").max(15),
  email: z.string().email("Invalid email"),
  department: z.string().min(1, "Department is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  message: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
