"use client";
/*
  components/Navbar.jsx — Temiz, centered nav
  
  Değişiklikler:
  - Logo/marka adı kaldırıldı
  - "Get in Touch" butonu kaldırıldı
  - Linkler ortalandı
  - Aktif section tespiti: IntersectionObserver
  - Framer Motion layoutId="pill" ile cam efektli hareketli gösterge
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#about", id: "about", label: "About" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    /* Scroll → glassmorphism */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /*
      IntersectionObserver ile aktif section tespiti.
      rootMargin: "-45% 0px -45% 0px" → ekranın ortasındaki section aktif sayılır.
      Bu sayede scroll ettikçe hangi bölümdeyiz bilinir ve pill animasyonu oraya kayar.
    */
    useEffect(() => {
        const ids = ["about", "experience", "projects", "contact"];
        const observers = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-45% 0px -45% 0px" }
            );

            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                paddingTop: scrolled ? "0.75rem" : "1.25rem",
                paddingBottom: scrolled ? "0.75rem" : "1.25rem",
                ...(scrolled
                    ? {
                        background: "rgba(13, 27, 46, 0.85)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        borderBottom: "1px solid var(--border)",
                    }
                    : {
                        background: "transparent",
                    }),
            }}
        >
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-center">

                {/* Masaüstü: Ortalanmış nav linkleri */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                            style={{
                                color: activeSection === link.id ? "var(--accent)" : "var(--text-muted)",
                            }}
                        >
                            {/*
                layoutId="pill" — Framer Motion'ın en özel özelliklerinden biri:
                Aynı layoutId'ye sahip iki div arasında smooth geçiş animasyonu yapar.
                Aktif olan linkin altındaki "pill" DOM'da bir yerden diğerine kayar.
                Bu, "FLIP" (First-Last-Invert-Play) tekniğinin otomatik uygulamasıdır.
              */}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="pill"
                                    className="absolute inset-0 rounded"
                                    style={{
                                        background: "rgba(100, 255, 218, 0.08)",
                                        border: "1px solid rgba(100, 255, 218, 0.2)",
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10 font-mono text-xs tracking-wider uppercase">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Mobil: Hamburger */}
                <button
                    className="md:hidden p-2 rounded"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    style={{ color: "var(--text-muted)", marginLeft: "auto" }}
                >
                    <div className="w-5 flex flex-col gap-1.5">
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 rounded"
                            style={{ background: "var(--accent)" }}
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-0.5 rounded"
                            style={{ background: "var(--accent)" }}
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 rounded"
                            style={{ background: "var(--accent)" }}
                        />
                    </div>
                </button>
            </div>

            {/* Mobil menü */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                        style={{
                            background: "rgba(13, 27, 46, 0.95)",
                            backdropFilter: "blur(16px)",
                            borderTop: "1px solid var(--border)",
                        }}
                    >
                        <div className="flex flex-col py-4 px-6 gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-3 rounded font-mono text-xs tracking-wider uppercase"
                                    style={{
                                        color: activeSection === link.id ? "var(--accent)" : "var(--text-muted)",
                                        background: activeSection === link.id ? "rgba(100,255,218,0.06)" : "transparent",
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
