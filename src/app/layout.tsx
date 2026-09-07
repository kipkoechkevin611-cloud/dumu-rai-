import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rai Cement Limited - Engineering Kenya's Strongest Foundations",
  description: "Premium cement manufacturing company in Kenya. ISO certified cement products for construction, infrastructure, and commercial projects. Nationwide delivery available.",
  keywords: "cement, construction, Kenya, Rai Cement, PPC, OPC, PLC, building materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
