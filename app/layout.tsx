import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "মোল্লা বাড়ী",
  description: "ঐতিহ্য, সংস্কৃতি এবং সম্প্রদায়ের মিলনভূমি",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
