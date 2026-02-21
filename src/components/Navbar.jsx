"use client";
/*
  components/Navbar.jsx

  Mobil güncelleme:
  - Hamburger menu VE AnimatePresence dropdown tamamen kaldırıldı
  - Nav linkleri her ekranda yatay gösterilir (hidden md:flex → her zaman flex)
  - Mobilde metin ve padding küçülür, desktop'ta normal boyuta döner
  - 3 kolon layout korundu ama sol spacer artık sadece md'da görünür,
    böylece mobil genişlikte linkler + kontroller tüm satıra yayılır
*/

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import SnowEffect from "@/components/SnowEffect";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
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
            <SnowEffect active={snowActive} />

            <nav
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    paddingTop: scrolled ? "0.6rem" : "1rem",
                    paddingBottom: scrolled ? "0.6rem" : "1rem",
                    ...(scrolled ? {
                        background: "rgba(13, 27, 46, 0.88)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        borderBottom: "1px solid var(--border)",
                    } : { background: "transparent" }),
                }}
            >
                {/*
          Layout:
          - [hidden md:block] sol spacer — sadece desktop'ta gösterilir
          - Linkler: her ekranda görünür, mobilde text-[10px] + px-1.5, desktop'ta text-xs + px-4
          - Sağ kontroller: kar + dil

          Bu yapı sayesinde mobilde: [linkler ... kontroller] (tam genişliğe yayılır)
          Desktop'ta: [boşluk | ortalanmış linkler | sağ kontroller]
        */}
                <div className="max-w-5xl mx-auto px-3 md:px-6 flex items-center gap-1 md:gap-4">

                    {/* Sol boşluk — sadece desktop */}
                    <div className="hidden md:flex flex-1" />

                    {/* Nav linkleri — her zaman görünür */}
                    <div className="flex items-center flex-1 md:flex-initial">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative py-1.5 md:py-2 px-1.5 md:px-4 rounded transition-colors duration-200"
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
                                {/*
                  Mobil: text-[10px] — çok küçük ama okunabilir
                  Desktop: text-xs — normal navbar boyutu
                */}
                                <span className="relative z-10 font-mono text-[10px] md:text-xs tracking-wide md:tracking-wider uppercase whitespace-nowrap">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Sağ kontroller: kar + dil */}
                    <div className="flex items-center justify-end gap-1.5 md:gap-2">

                        {/* Kar butonu */}
                        <button
                            onClick={() => setSnowActive(!snowActive)}
                            className="p-1.5 md:p-2 rounded transition-all duration-200"
                            title={snowActive
                                ? (lang === "tr" ? "Karı durdur" : "Stop snow")
                                : (lang === "tr" ? "Kar yağdır! ❄️" : "Make it snow! ❄️")}
                            style={{
                                color: snowActive ? "var(--accent)" : "var(--text-dim)",
                                background: snowActive ? "rgba(100, 255, 218, 0.08)" : "transparent",
                                border: `1px solid ${snowActive ? "var(--border-accent)" : "transparent"}`,
                            }}
                            aria-label="Toggle snow"
                        >
                            <svg
                                className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-500"
                                style={{ transform: snowActive ? "rotate(45deg)" : "rotate(0deg)" }}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 2h2v2.28l1.87-1.87 1.41 1.41-3.28 3.28V11h3.9l3.28-3.28 1.41 1.41L19.72 11H22v2h-2.28l1.87 1.87-1.41 1.41L16.9 13H13v3.9l3.28 3.28-1.41 1.41L13 19.72V22h-2v-2.28l-1.87 1.87-1.41-1.41L11 16.9V13H7.1l-3.28 3.28-1.41-1.41L4.28 13H2v-2h2.28L2.41 9.13 3.82 7.72 7.1 11H11V7.1L7.72 3.82l1.41-1.41L11 4.28V2z" />
                            </svg>
                        </button>

                        {/* Dil toggle */}
                        <button
                            onClick={toggle}
                            className="flex items-center gap-0.5 md:gap-1 px-2 md:px-2.5 py-1 md:py-1.5 rounded border transition-all duration-200"
                            style={{ borderColor: "var(--border)", background: "transparent" }}
                            aria-label="Toggle language"
                        >
                            <span className="font-mono text-[10px] md:text-xs font-semibold" style={{ color: lang === "en" ? "var(--accent)" : "var(--text-dim)" }}>EN</span>
                            <span className="font-mono text-[10px] md:text-xs" style={{ color: "var(--text-dim)" }}>|</span>
                            <span className="font-mono text-[10px] md:text-xs font-semibold" style={{ color: lang === "tr" ? "var(--accent)" : "var(--text-dim)" }}>TR</span>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    );
}
