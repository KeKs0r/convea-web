import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Convea.ai - AI-Enhanced Email Marketing for Klaviyo",
  description:
    "Enhance your Klaviyo email flows with AI-driven smart triggers, personalized targeting, and sophisticated recommendations. No development work required.",
  keywords: [
    "Klaviyo",
    "Email Marketing",
    "AI",
    "Shopify",
    "Marketing Automation",
    "E-commerce",
  ],
  openGraph: {
    title: "Convea.ai - AI-Enhanced Email Marketing for Klaviyo",
    description:
      "Enhance your Klaviyo email flows with AI-driven smart triggers, personalized targeting, and sophisticated recommendations. No development work required.",
    url: "https://convea.ai",
    siteName: "Convea.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convea.ai - AI-Enhanced Email Marketing for Klaviyo",
    description:
      "Enhance your Klaviyo email flows with AI-driven smart triggers, personalized targeting, and sophisticated recommendations. No development work required.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
