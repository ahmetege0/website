"use client";
/*
  components/Navbar.jsx

  Değişiklikler:
  1. CENTER SECTION → overflow-x-auto (mobilde yatay kaydırılabilir)
     Kar butonu bu scrollable alana taşındı. İlerde dark mode vs. buraya eklenir.
  2. handleNavClick → ana sayfada iken/#about tıklanınca sayfa yenilenmeden smooth scroll
  3. Nav link <a> → flex items-center justify-center | span → leading-none (About hizalama fix)
  4. SnowEffect geri döndü (scrollable alanda kar ikonu)
*/

import { useState, useEffect, useRef } from "react";
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
    const panelRef = useRef(null);

    const navLinks = [
        { href: "/#about", id: "about", label: t.about },
        { href: "/#experience", id: "experience", label: t.experience },
        { href: "/#projects", id: "projects", label: t.projects },
        { href: "/#contact", id: "contact", label: t.contact },
    ];

    const menuItems = lang === "tr"
        ? [
            { href: "/photos", icon: "📷", label: "Fotoğraflar", sub: "Anılar & kareler" },
            { href: "/music", icon: "🎵", label: "Müzikler", sub: "Çalma listesi" },
        ]
        : [
            { href: "/photos", icon: "📷", label: "Photos", sub: "Gallery & moments" },
            { href: "/music", icon: "🎵", label: "Music", sub: "Playlist & favorites" },
        ];

    /* Scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Active section */
    useEffect(() => {
        const ids = ["about", "experience", "projects", "contact"];
        const obs = ids.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const io = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setActiveSection(id); },
                { rootMargin: "-45% 0px -45% 0px" }
            );
            io.observe(el);
            return io;
        });
        return () => obs.forEach((io) => io?.disconnect());
    }, []);

    /* Close panel on outside click */
    useEffect(() => {
        if (!menuOpen) return;
        const handler = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [menuOpen]);

    /*
      Smart nav click:
      - Ana sayfadaysak (/) → sayfa yenilenmeden smooth scroll
      - Başka sayfadaysak (music, photos vs.) → normal href navigasyon
    */
    const handleNavClick = (e, href) => {
        if (typeof window !== "undefined" && window.location.pathname === "/" && href.startsWith("/#")) {
            e.preventDefault();
            document.getElementById(href.replace("/#", ""))?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <SnowEffect active={snowActive} />
            <nav
                className="fixed left-0 right-0 z-50 px-4 md:px-8"
                style={{ top: "0.75rem" }}
            >
                <div className="max-w-5xl mx-auto">
                    <div
                        className="flex items-center gap-2 rounded-full px-4 md:px-5 py-2 md:py-2.5"
                        style={{
                            background: scrolled ? "rgba(13, 27, 46, 0.88)" : "rgba(13, 27, 46, 0.72)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.07)",
                            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.25)",
                            transition: "background 0.4s ease, box-shadow 0.4s ease",
                        }}
                    >
                        {/* ─── LEFT: Favicon + ad (sadece sm+) ─── */}
                        <a
                            href="/"
                            className="hidden sm:flex items-center gap-2 shrink-0 no-underline"
                            aria-label="Home"
                        >
                            <img
                                src="/favicon.png"
                                alt="AE"
                                className="w-7 h-7 rounded-full"
                                style={{ border: "1px solid rgba(100,255,218,0.2)" }}
                            />
                            <span
                                className="font-bold text-sm leading-none"
                                style={{ color: "var(--text)" }}
                            >
                                Ahmet Ege
                            </span>
                        </a>

                        {/*
                          ─── CENTER: Yatay kaydırılabilir nav ───────────────────────
                          Mobilde swipe ile yeni ikonlara erişilebilir:
                          [About][Experience][Projects][Contact][❄️]  → kaydır →  [future: 🌙 dark mode]
                          Desktopda justify-center ile ortada görünür.
                          .nav-scroll → webkit scrollbar gizlenir
                        */}
                        <div className="flex-1 overflow-x-auto nav-scroll">
                            <div className="flex items-center md:justify-center" style={{ minWidth: "max-content" }}>

                                {/* Nav linkleri */}
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="relative flex items-center justify-center px-2 md:px-3 py-1.5 md:py-2 rounded-full transition-colors duration-200 no-underline select-none"
                                        style={{
                                            color: activeSection === link.id ? "var(--text)" : "var(--text-muted)",
                                        }}
                                    >
                                        {/* Kayan oval pill — sadece aktif link */}
                                        {activeSection === link.id && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-full"
                                                style={{ background: "rgba(255,255,255,0.14)" }}
                                                transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                                            />
                                        )}
                                        <span className="relative z-10 font-semibold text-[10px] md:text-[11px] whitespace-nowrap leading-none">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}

                                {/* Kar butonu — scrollable alanda, mobilde swipe ile erişilir */}
                                <button
                                    onClick={() => setSnowActive((v) => !v)}
                                    className="relative flex items-center justify-center px-2 md:px-3 py-1.5 rounded-full transition-all duration-200 ml-0.5"
                                    style={{ color: snowActive ? "var(--accent)" : "var(--text-muted)" }}
                                    title={snowActive
                                        ? (lang === "tr" ? "Karı durdur" : "Stop snow")
                                        : (lang === "tr" ? "Kar yağdır ❄️" : "Make it snow ❄️")}
                                    aria-label="Toggle snow"
                                >
                                    {snowActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{ background: "rgba(100,255,218,0.1)" }}
                                        />
                                    )}
                                    <svg
                                        className="relative z-10 w-3.5 h-3.5"
                                        style={{ transform: snowActive ? "rotate(30deg)" : "none", transition: "transform 0.4s ease" }}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M11 2h2v2.28l1.87-1.87 1.41 1.41-3.28 3.28V11h3.9l3.28-3.28 1.41 1.41L19.72 11H22v2h-2.28l1.87 1.87-1.41 1.41L16.9 13H13v3.9l3.28 3.28-1.41 1.41L13 19.72V22h-2v-2.28l-1.87 1.87-1.41-1.41L11 16.9V13H7.1l-3.28 3.28-1.41-1.41L4.28 13H2v-2h2.28L2.41 9.13 3.82 7.72 7.1 11H11V7.1L7.72 3.82l1.41-1.41L11 4.28V2z" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                        {/* ─── RIGHT: Hamburger + EN/TR ─── */}
                        <div className="flex items-center gap-1.5 shrink-0" ref={panelRef}>

                            {/* Hamburger butonu */}
                            <div className="relative">
                                <button
                                    onClick={() => setMenuOpen((v) => !v)}
                                    className="flex flex-col items-center justify-center gap-[4.5px] w-8 h-8 rounded-full transition-all duration-200"
                                    style={{
                                        background: menuOpen ? "rgba(100,255,218,0.1)" : "rgba(255,255,255,0.06)",
                                        border: `1px solid ${menuOpen ? "rgba(100,255,218,0.3)" : "rgba(255,255,255,0.09)"}`,
                                    }}
                                    aria-label="Open menu"
                                    aria-expanded={menuOpen}
                                >
                                    <motion.span className="block w-3.5 h-px rounded-full"
                                        style={{ background: menuOpen ? "var(--accent)" : "var(--text)" }}
                                        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5.5 : 0 }}
                                        transition={{ duration: 0.22 }} />
                                    <motion.span className="block w-3.5 h-px rounded-full"
                                        style={{ background: menuOpen ? "var(--accent)" : "var(--text)" }}
                                        animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                                        transition={{ duration: 0.18 }} />
                                    <motion.span className="block w-3.5 h-px rounded-full"
                                        style={{ background: menuOpen ? "var(--accent)" : "var(--text)" }}
                                        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5.5 : 0 }}
                                        transition={{ duration: 0.22 }} />
                                </button>

                                {/* Explore Panel */}
                                <AnimatePresence>
                                    {menuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.94, y: -6 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.94, y: -6 }}
                                            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="absolute top-full mt-3 right-0 rounded-2xl p-2 w-52"
                                            style={{
                                                background: "rgba(16, 26, 44, 0.97)",
                                                backdropFilter: "blur(24px)",
                                                WebkitBackdropFilter: "blur(24px)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(100,255,218,0.04)",
                                            }}
                                        >
                                            <p className="text-[9px] font-semibold uppercase tracking-widest px-3 pt-1.5 pb-2"
                                                style={{ color: "var(--text-dim)" }}>
                                                {lang === "tr" ? "Keşfet" : "Explore"}
                                            </p>

                                            {menuItems.map((item) => (
                                                <a
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-all duration-150"
                                                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    <span className="text-xl select-none">{item.icon}</span>
                                                    <div>
                                                        <p className="text-sm font-semibold leading-tight" style={{ color: "var(--text)" }}>{item.label}</p>
                                                        <p className="text-xs leading-tight mt-0.5" style={{ color: "var(--text-muted)" }}>{item.sub}</p>
                                                    </div>
                                                    <svg className="w-3.5 h-3.5 ml-auto opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text)" }}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Dil toggle */}
                            <button
                                onClick={toggle}
                                className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full transition-all duration-200"
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(100,255,218,0.08)"; e.currentTarget.style.borderColor = "rgba(100,255,218,0.25)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
                                aria-label="Toggle language"
                            >
                                <span className="font-semibold text-[10px] md:text-xs" style={{ color: lang === "en" ? "var(--accent)" : "var(--text-dim)" }}>EN</span>
                                <span className="text-[10px] md:text-xs" style={{ color: "var(--text-dim)" }}>|</span>
                                <span className="font-semibold text-[10px] md:text-xs" style={{ color: lang === "tr" ? "var(--accent)" : "var(--text-dim)" }}>TR</span>
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
