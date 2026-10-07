"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { CONTACT_HREFS, ContactIcon } from "@/lib/contactLinks";

export default function Footer() {
    const year = new Date().getFullYear();
    const { lang } = useLanguage();
    const t = translations[lang].footer;

    return (
        <footer className="py-8 mt-0 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)", position: "relative", zIndex: 200 }}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span
                        className="w-7 h-7 flex items-center justify-center rounded text-xs font-black font-mono"
                        style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
                    >
                        AE
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {t.builtBy} · {year}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    {[
                        { href: CONTACT_HREFS[0], label: "GitHub", icon: <ContactIcon index={0} className="w-4 h-4" /> },
                        { href: CONTACT_HREFS[1], label: "LinkedIn", icon: <ContactIcon index={1} className="w-4 h-4" /> },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="p-2 rounded transition-all duration-200"
                            style={{ color: "var(--text-dim)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--accent)";
                                e.currentTarget.style.background = "var(--accent-glow)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--text-dim)";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
