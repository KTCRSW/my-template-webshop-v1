import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({ 
  subsets: ["latin"],
  weight: "300", 
});

export const metadata: Metadata = {
  title: "บริการซื้อขายของ",
  description: "mShop - template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anuphan.className}>{children}</body>
    </html>
  );
}