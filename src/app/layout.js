/* 
  layout.js — Güncellendi: Astrophotographer kaldırıldı, favicon eklendi, SEO metadata güncellendi
*/

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  /*
    icons: Favicon yapılandırması
    Next.js App Router'da favicon'ı metadata üzerinden belirtebiliriz.
    /favicon.png → public/favicon.png dosyası
  */
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
