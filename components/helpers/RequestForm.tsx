"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  appointmentSchema,
  AppointmentFormValues,
} from "@/schemas/appointment.schema";
import { createAppointment } from "@/lib/api/appointment";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { services } from "../constants/MultispecialtyServices";

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      department: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      toast.success("Appointment booked successfully");
      reset();
    },
    onError: () => {
      toast.error("Failed to book appointment");
    },
  });

  const onSubmit = (data: AppointmentFormValues) => {
    mutation.mutate(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
          <p className="mt-1 text-xs text-red-500">{errors.name?.message}</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <input
            {...register("contact")}
            placeholder="Contact"
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
          <p className="mt-1 text-xs text-red-500">{errors.contact?.message}</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          {...register("email")}
          placeholder="Email ID"
          className="w-full border rounded-md px-4 py-3 text-sm"
        />

        <div className="relative">
          <select
            {...register("department")}
            className="w-full border rounded-md px-4 py-3 text-sm text-gray-500 "
          >
            <option value="" disabled>
              Select Department
            </option>

            {services.map((service) => (
              <option
                key={service.title}
                value={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              >
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-xs text-red-500">{errors.department?.message}</p>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Preferred Date
          </label>
          <input
            type="date"
            {...register("date")}
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Preferred Time
          </label>
          <input
            type="time"
            {...register("time")}
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
        </div>
      </div>

      {/* Textarea */}
      <textarea
        {...register("message")}
        placeholder="Your Message"
        rows={4}
        className="w-full border rounded-md px-4 py-3 text-sm resize-none"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="group relative overflow-hidden w-full flex items-center justify-center gap-2
  text-accent font-semibold py-3 rounded-md border border-accent"
      >
        {/* Center Fill */}
        <span className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />

        {/* Content */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {mutation.isPending ? "Submitting..." : "Book an Appointment"}
        </span>

        <ArrowUpRight
          size={20}
          className="relative z-10 transition-all duration-300 ease-out
    group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
        />
      </button>
    </form>
  );
}
