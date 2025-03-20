import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Insights | AI Solutions for SMBs",
  description: "Helping small and medium businesses compete and thrive in their marketplace using AI Automations, Process Improvement, IT Consulting, SEO, Marketing, and more.",
  keywords: ["AI Automations", "Process Improvement", "IT Consulting", "SEO", "Marketing", "SMB Solutions", "Business Growth"],
  authors: [{ name: "Apex Insights" }],
  creator: "Apex Insights",
  publisher: "Apex Insights",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
