import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang="pt-BR" className={dmSans.className}>
      <body>
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}