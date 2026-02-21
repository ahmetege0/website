"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experience() {
    const { lang } = useLanguage();
    const t = translations[lang].experience;

    return (
        <section id="experience" className="relative py-28">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">{t.label}</p>
                    <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text)" }}>
                        {t.title}
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    {t.entries.map((exp) => (
                        <motion.a
                            key={exp.company}
                            href={exp.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            className="group relative p-6 rounded-xl transition-all duration-300 no-underline"
                            style={{ border: "1px solid transparent" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--bg-card)";
                                e.currentTarget.style.borderColor = "var(--border-accent)";
                                e.currentTarget.style.boxShadow = "0 0 30px rgba(100,255,218,0.05), 0 8px 32px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.borderColor = "transparent";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Sol: Tarih */}
                                <div className="sm:w-36 flex-shrink-0 pt-0.5">
                                    <p className="font-mono text-xs tracking-wider uppercase leading-relaxed" style={{ color: "var(--text-dim)" }}>
                                        {exp.period}
                                    </p>
                                </div>

                                {/* Sağ: İçerik */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-base leading-snug mb-1 flex items-center gap-1.5 flex-wrap" style={{ color: "var(--text)" }}>
                                        <span className="group-hover:text-[var(--accent)] transition-colors duration-200">{exp.title}</span>
                                        <span style={{ color: "var(--text-dim)" }}>·</span>
                                        <span className="group-hover:text-[var(--accent)] transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
                                            {exp.company}
                                        </span>
                                        <svg
                                            className="w-3.5 h-3.5 ml-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            style={{ color: "var(--accent)" }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </h3>

                                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="font-mono text-xs px-3 py-1 rounded-full"
                                                style={{ color: "var(--accent)", background: "rgba(100, 255, 218, 0.08)", border: "1px solid rgba(100, 255, 218, 0.15)" }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
