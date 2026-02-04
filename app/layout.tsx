import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
