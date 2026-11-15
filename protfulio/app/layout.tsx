import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Al Kawser | KAWSER.DEV — Premium Developer Portfolio",
  description: "Portfolio of Abdullah Al Kawser — Frontend Developer, CSE Student at BUBT, Aspiring AI/ML Engineer & Creative Developer building futuristic digital experiences.",
  keywords: ["Abdullah Al Kawser", "KAWSER.DEV", "Frontend Developer", "BUBT CSE", "Software Engineer", "AI/ML Engineer", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Abdullah Al Kawser" }],
  creator: "Abdullah Al Kawser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kawser.dev",
    title: "Abdullah Al Kawser | KAWSER.DEV — Premium Developer Portfolio",
    description: "Turning Ideas Into Digital Experiences Through Code, Creativity & Innovation.",
    siteName: "KAWSER.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Kawser | KAWSER.DEV",
    description: "Frontend Developer & CSE Student at BUBT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#f3f4f6] selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
