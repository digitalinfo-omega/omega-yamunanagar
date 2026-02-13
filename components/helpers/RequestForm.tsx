"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createAppointment } from "@/lib/api/appointment";
import {
  appointmentSchema,
  AppointmentFormValues,
} from "@/schemas/appointment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { UploadCloud, X } from "lucide-react";

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      toast.success("Appointment submitted successfully");
      reset();
      setFiles([]);
    },
    onError: () => toast.error("Submission failed"),
  });

  /* ================= FILE VALIDATION ================= */

  const validateFiles = (fileList: FileList) => {
    const validFiles: File[] = [];
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024;

    Array.from(fileList).forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF, JPG, PNG files are allowed.");
        return;
      }

      if (file.size > maxSize) {
        toast.error("File size must be under 10MB.");
        return;
      }

      validFiles.push(file);
    });

    return validFiles;
  };

  const handleFiles = (fileList: FileList) => {
    const validated = validateFiles(fileList);
    if (!validated || validated.length === 0) return;

    setFiles((prev) => [...prev, ...validated]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  /* ================= SUBMIT ================= */

  const onSubmit = (data: AppointmentFormValues) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });

    files.forEach((file) => {
      formData.append("medicalRecords", file);
    });

    mutation.mutate(formData as any);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* GRID FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Full Name*</label>
          <input
            {...register("name")}
            placeholder="Enter Your Full Name"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
          <p className="text-xs text-red-500">{errors.name?.message}</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Contact*</label>
          <input
            {...register("contact")}
            placeholder="+91 XXXXX XXXXX"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
          <p className="text-xs text-red-500">{errors.contact?.message}</p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email Address*</label>
          <input
            type="email"
            {...register("email")}
            placeholder="your@gmail.com"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Age */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Age*</label>
          <input
            placeholder="Enter your age"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Diagnosis */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Cancer Diagnosis/Type (if know)
          </label>
          <input
            placeholder="e.g., Breast Cancer, Lung Cancer"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Referring Doctor */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Referring Doctor (if applicable)
          </label>
          <input
            placeholder="Doctor’s name"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Previous Treatment */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Previous Treatment (if any)
          </label>
          <input
            placeholder="e.g., Surgery, Chemotherapy"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        {/* Consultation Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Preferred Consultation Date*
          </label>
          <input
            type="date"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Medical Records Upload</label>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl h-36 flex flex-col items-center justify-center text-sm transition ${
            dragActive
              ? "border-accent bg-accent/10"
              : "border-gray-300 bg-gray-100"
          }`}
        >
          <UploadCloud size={24} className="mb-2 text-gray-600" />

          <p className="text-gray-600 text-center px-4">
            Drag & drop files here, or{" "}
            <span className="text-accent underline">click to browse</span>
          </p>

          <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>

          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              if (e.target.files) {
                handleFiles(e.target.files);
              }
            }}
          />
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="flex flex-col gap-2 mt-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border rounded-lg px-4 py-2 text-sm"
              >
                <span className="truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Additional Information</label>
        <textarea
          rows={4}
          placeholder="Any additional information you'd like us to know..."
          className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-[#E56E1B] text-white py-4 rounded-lg font-medium hover:opacity-90 transition"
      >
        {mutation.isPending ? "Submitting..." : "Submit Consolation Request"}
      </button>
    </form>
  );
}
