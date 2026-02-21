"use client";
/*
  components/Navbar.jsx — Kar butonu + EN/TR + mobile fix
  
  Yeni: ❄️ kar butonu (snow toggle)
  - useState ile active/inactive yönetiliyor
  - SnowEffect bileşeni burada render ediliyor (fixed positioned, pointer-events:none)
  - Buton aktifken vurgu rengi alıyor
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import SnowEffect from "@/components/SnowEffect";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [menuOpen, setMenuOpen] = useState(false);
    const [snowActive, setSnowActive] = useState(false);
    const { lang, toggle } = useLanguage();
    const t = translations[lang].nav;

    const navLinks = [
        { href: "#about", id: "about", label: t.about },
        { href: "#experience", id: "experience", label: t.experience },
        { href: "#projects", id: "projects", label: t.projects },
        { href: "#contact", id: "contact", label: t.contact },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const ids = ["about", "experience", "projects", "contact"];
        const observers = [];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: "-45% 0px -45% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <>
            {/* SnowEffect: Navbar içinde render ediliyor ama fixed positioned */}
            <SnowEffect active={snowActive} />

            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    paddingTop: scrolled ? "0.75rem" : "1.25rem",
                    paddingBottom: scrolled ? "0.75rem" : "1.25rem",
                    ...(scrolled
                        ? {
                            background: "rgba(13, 27, 46, 0.88)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            borderBottom: "1px solid var(--border)",
                        }
                        : { background: "transparent" }),
                }}
            >
                {/*
          3-Kolon Layout (mobile fix):
          [flex-1 boş] | [ortalanmış linkler — hidden on mobile] | [flex-1 → sağa yaslı kontroller]
          
          İki flex-1 birbirini dengeliyor → orta blok kesinlikle ortada.
          Mobilde orta gizlendiğinde sadece sağ köşedeki butonlar görünür.
        */}
                <div className="max-w-5xl mx-auto px-6 flex items-center gap-4">

                    {/* Sol boşluk */}
                    <div className="flex-1" />

                    {/* Orta: Nav linkleri — sadece desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 rounded transition-colors duration-200"
                                style={{ color: activeSection === link.id ? "var(--accent)" : "var(--text-muted)" }}
                            >
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

                    {/* Sağ: Kar butonu + Dil toggle + Hamburger */}
                    <div className="flex-1 flex items-center justify-end gap-2">

                        {/*
              Kar butonu ❄️
              - title ile tooltip gösterilir
              - Aktifken mint rengi + hafif arka plan
              - Her tıklamada snowActive toggle
            */}
                        <button
                            onClick={() => setSnowActive(!snowActive)}
                            className="p-2 rounded transition-all duration-200"
                            title={snowActive ? (lang === "tr" ? "Karı durdur" : "Stop snow") : (lang === "tr" ? "Kar yağdır! ❄️" : "Make it snow! ❄️")}
                            style={{
                                color: snowActive ? "var(--accent)" : "var(--text-dim)",
                                background: snowActive ? "rgba(100, 255, 218, 0.08)" : "transparent",
                                border: `1px solid ${snowActive ? "var(--border-accent)" : "transparent"}`,
                            }}
                            onMouseEnter={(e) => {
                                if (!snowActive) {
                                    e.currentTarget.style.color = "var(--text-muted)";
                                    e.currentTarget.style.border = "1px solid var(--border)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!snowActive) {
                                    e.currentTarget.style.color = "var(--text-dim)";
                                    e.currentTarget.style.border = "1px solid transparent";
                                }
                            }}
                            aria-label="Toggle snow"
                        >
                            {/* Kar tanesi SVG */}
                            <svg
                                className="w-4 h-4 transition-transform duration-500"
                                style={{ transform: snowActive ? "rotate(45deg)" : "rotate(0deg)" }}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 2h2v2.28l1.87-1.87 1.41 1.41-3.28 3.28V11h3.9l3.28-3.28 1.41 1.41L19.72 11H22v2h-2.28l1.87 1.87-1.41 1.41L16.9 13H13v3.9l3.28 3.28-1.41 1.41L13 19.72V22h-2v-2.28l-1.87 1.87-1.41-1.41L11 16.9V13H7.1l-3.28 3.28-1.41-1.41L4.28 13H2v-2h2.28L2.41 9.13 3.82 7.72 7.1 11H11V7.1L7.72 3.82l1.41-1.41L11 4.28V2z" />
                            </svg>
                        </button>

                        {/* EN | TR Dil toggle */}
                        <button
                            onClick={toggle}
                            className="flex items-center gap-1 px-2.5 py-1.5 rounded border transition-all duration-200"
                            style={{ borderColor: "var(--border)", background: "transparent" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-accent)";
                                e.currentTarget.style.background = "rgba(100,255,218,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border)";
                                e.currentTarget.style.background = "transparent";
                            }}
                            aria-label="Toggle language"
                        >
                            <span className="font-mono text-xs font-semibold" style={{ color: lang === "en" ? "var(--accent)" : "var(--text-dim)" }}>EN</span>
                            <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>|</span>
                            <span className="font-mono text-xs font-semibold" style={{ color: lang === "tr" ? "var(--accent)" : "var(--text-dim)" }}>TR</span>
                        </button>

                        {/* Hamburger — sadece mobil */}
                        <button
                            className="md:hidden p-2 rounded"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 rounded" style={{ background: "var(--accent)" }} />
                                <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 rounded" style={{ background: "var(--accent)" }} />
                                <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 rounded" style={{ background: "var(--accent)" }} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobil dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                            style={{ background: "rgba(13, 27, 46, 0.96)", backdropFilter: "blur(16px)", borderTop: "1px solid var(--border)" }}
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
        </>
    );
}
