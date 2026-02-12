"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

const BookAppointment = () => {
  return (
    <div className="fixed right-0 top-[25%] z-50">
      <Link
        href=""
        className="
          flex items-center gap-3
          bg-[#299fb0] text-white
          px-5 py-3
          rounded-t-2xl
          shadow-xl
            -rotate-90
          origin-bottom-right
          hover:bg-[#238b9a]
          transition-colors
          duration-300
          hover:-translate-x-1 
        "
      >
        <span className="bg-white text-[#299fb0] p-2 rounded-full flex items-center justify-center">
          <Calendar size={20} />
        </span>

        <span className="text-sm font-semibold whitespace-nowrap">
          Book an Appointment
        </span>
      </Link>
    </div>
  );
};

export default BookAppointment;
