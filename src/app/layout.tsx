import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Capital",
  description: "Golden Capital - Seu parceiro de investimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}