import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import NavBar from "@/components/layout/NavBar";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/providers/AOSProvider";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import BookAppointment from "@/components/layout/BookAppointment";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Cancer Hospital in Jabalpur | Omega Hospitals Advanced Care",
  description:
    "Leading cancer & multispecialty hospital in Jabalpur with AI-powered treatment, expert oncologists, 24/7 emergency care. Book appointment: 0261-226-5552",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        <AOSProvider />
        <Toaster />
        <ReactQueryProvider>
          <NavBar />
          {children}
          <Footer />
          <BookAppointment />
          <MobileBottomNav />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
