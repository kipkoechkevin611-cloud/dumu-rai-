import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18436449467"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18436449467');
          `}
        </Script>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
