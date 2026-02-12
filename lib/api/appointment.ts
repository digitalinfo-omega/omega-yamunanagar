import axios from "axios";
import { AppointmentFormValues } from "@/schemas/appointment.schema";

export interface Appointment extends AppointmentFormValues {
  id: string;
}

export const createAppointment = async (payload: AppointmentFormValues) => {
  const { data } = await axios.post("/api/appointments", payload);
  return data;
};
