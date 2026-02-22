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
      <body>
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
