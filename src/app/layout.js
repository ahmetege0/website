/* 
  layout.js — LanguageProvider + ThemeProvider + SmoothScroll
*/

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Ahmet Ege | Software Engineer",
  description:
    "AI Researcher & Data Engineer (Long-Term Intern) at Magibu AI and Computer Engineering student at Yeditepe University. Building RAG systems, multilingual datasets, and scalable backends with Java Spring Boot and Python.",
  keywords: [
    "Ahmet Ege",
    "software engineer",
    "full stack developer",
    "Java Spring Boot",
    "Python",
    "microservices",
    "AI engineer",
    "RAG",
    "Magibu AI",
    "Yeditepe University",
    "SERG",
    "ArcMotus",
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
      "AI Researcher & Data Engineer at Magibu AI · Computer Engineering at Yeditepe University.",
    url: "https://ahmetege.dev",
    siteName: "Ahmet Ege",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Ege | Software Engineer",
    description:
      "AI Researcher & Data Engineer at Magibu AI · Computer Engineering at Yeditepe University.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Blocking script — React hydration'dan ÖNCE doğru temayı set eder.
            Bu sayede dark→light flash (FOUC) olmaz. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.setAttribute("data-theme","light")}}catch(e){}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
