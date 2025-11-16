import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITUX Mateusz Kuzaj Portfolio",
  description: "Software Developer & UI/UX Portfolio of Mateusz Kuzaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${albertSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
