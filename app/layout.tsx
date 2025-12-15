import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const atkMono = Atkinson_Hyperlegible_Mono({
  variable: "--font-atkmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazaro Citizen",
  description: "Innovación y Tecnología",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkMono.variable} font-sans antialiased`}
      >
        <Navbar/>
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
