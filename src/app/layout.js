/* 
  layout.js — LanguageProvider eklendi
*/

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ahmet Ege | Software Engineer",
  description:
    "Software Engineer & Undergraduate Research Assistant at SERG, Yeditepe University. Building scalable backend systems with Java Spring Boot, Python, and microservice architectures.",
  keywords: [
    "Ahmet Ege",
    "software engineer",
    "full stack developer",
    "Java Spring Boot",
    "Python",
    "microservices",
    "Yeditepe University",
    "SERG",
    "portfolio",
  ],
  authors: [{ name: "Ahmet Ege" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ahmet Ege | Software Engineer",
    description:
      "Software Engineer & Undergraduate Research Assistant at Yeditepe University.",
    url: "https://ahmetege.dev",
    siteName: "Ahmet Ege",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Ege | Software Engineer",
    description:
      "Software Engineer & Undergraduate Research Assistant at Yeditepe University.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/*
          LanguageProvider: Tüm uygulamayı sarmalıyor.
          Bu sayede herhangi bir bileşen useLanguage() hook'u ile
          dil durumuna ve toggle fonksiyonuna erişebilir.
          
          Server Component olan layout.js içinde Client Component
          (LanguageProvider) kullanmak Next.js'de geçerli bir pattern'dir.
          Sadece Provider ve children'lar client tarafına geçer.
        */}
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
