import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VersionSwitcher from "@/components/VersionSwitcher";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "All Around Connections - Demo Versions",
  description: "Professional and Tech versions of All Around Connections website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <VersionSwitcher />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
