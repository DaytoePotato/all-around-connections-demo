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
  title: "All Around Connections | Website Design, Hosting & IT Solutions",
  description: "All Around Connections provides professional website design, reliable web hosting, networking solutions, and IT support to help your business succeed in the digital world.",
  keywords: ["website design", "web hosting", "networking solutions", "IT support", "business technology", "web development"],
  authors: [{ name: "All Around Connections" }],
  openGraph: {
    title: "All Around Connections | Your Technology Partner",
    description: "Professional website design, hosting, and IT solutions for businesses of all sizes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
