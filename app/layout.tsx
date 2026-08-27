import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sayan Das | 4th Year B.Tech CSE Undergrad & AI/ML Developer",
  description:
    "Portfolio of Sayan Das — 4th-Year Computer Science & Engineering Undergraduate at IEM Kolkata specializing in AI/ML, Autonomous Drone Systems, Edge IoT, and Full-Stack Engineering.",
  keywords: [
    "Sayan Das",
    "Computer Science Student",
    "B.Tech CSE",
    "4th Year Undergrad",
    "AI ML Developer",
    "Drone Systems",
    "Computer Vision",
    "Full Stack Developer",
    "Python",
    "Spring Boot",
    "React",
    "Next.js",
    "IEM Kolkata",
  ],
  authors: [{ name: "Sayan Das" }],
  creator: "Sayan Das",
  openGraph: {
    title: "Sayan Das | 4th Year B.Tech CSE Undergrad & AI/ML Developer",
    description:
      "Explore AI/ML projects, autonomous UAV telemetry pipelines, distributed full-stack apps, and semiconductor device research by Sayan Das.",
    type: "website",
    locale: "en_US",
    siteName: "Sayan Das Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Das | 4th Year B.Tech CSE Undergrad",
    description:
      "Building autonomous systems, computer vision edge pipelines, and scalable architectures.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
