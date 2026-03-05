"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Experience() {
    const { lang } = useLanguage();
    const t = translations[lang].experience;

    return (
        <section id="experience" className="relative py-28">
            <div className="max-w-7xl mx-auto px-6">

                <div className="md:grid" style={{ gridTemplateColumns: "1fr auto 1fr", gap: "0", alignItems: "start" }}>

                    {/* ── Sol kolon: Timeline ── */}
                    <div style={{ maxWidth: "520px" }}>

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

                        {/* Timeline */}
                        <div className="relative">
                            {/* Dikey çizgi */}
                            <div
                                className="absolute left-0 top-0 bottom-0"
                                style={{
                                    width: "1px",
                                    background: "linear-gradient(to bottom, transparent 0%, var(--accent) 8%, var(--border-accent) 50%, var(--border-accent) 92%, transparent 100%)",
                                    opacity: 0.4,
                                }}
                            />

                            <div className="flex flex-col gap-3 pl-8">
                                {t.entries.map((exp, index) => (
                                    <motion.a
                                        key={exp.company}
                                        href={exp.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.12 }}
                                        className="group relative no-underline block"
                                        style={{
                                            padding: "20px 20px 20px 20px",
                                            borderRadius: "14px",
                                            border: "1px solid transparent",
                                            background: "transparent",
                                            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(var(--bg-card-rgb), 0.6)";
                                            e.currentTarget.style.borderColor = "var(--border-accent)";
                                            e.currentTarget.style.boxShadow = "0 0 0 1px var(--border-accent), 0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)";
                                            e.currentTarget.style.transform = "translateX(4px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.borderColor = "transparent";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "translateX(0)";
                                        }}
                                    >
                                        {/* Timeline dot — outer ring + inner glow */}
                                        <div
                                            className="absolute"
                                            style={{ left: "-35px", top: "24px" }}
                                        >
                                            {/* Outer ring */}
                                            <div
                                                className="group-hover:scale-110 transition-transform duration-300"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    borderRadius: "50%",
                                                    border: "1.5px solid var(--accent)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    background: "var(--bg)",
                                                    boxShadow: "0 0 0 3px rgba(var(--accent-rgb, 99,102,241), 0.08)",
                                                    transition: "box-shadow 0.3s",
                                                }}
                                            >
                                                {/* Inner dot */}
                                                <div
                                                    className="group-hover:scale-110 transition-all duration-300"
                                                    style={{
                                                        width: "7px",
                                                        height: "7px",
                                                        borderRadius: "50%",
                                                        background: "var(--accent)",
                                                        boxShadow: "0 0 6px var(--accent)",
                                                        transition: "box-shadow 0.3s",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Period badge */}
                                        <div className="mb-3">
                                            <span
                                                className="font-mono text-xs tracking-widest uppercase"
                                                style={{
                                                    color: "var(--accent)",
                                                    opacity: 0.7,
                                                    letterSpacing: "0.1em",
                                                }}
                                            >
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Title + company */}
                                        <div className="mb-1">
                                            <h3
                                                className="font-bold text-base leading-snug"
                                                style={{ color: "var(--text)", marginBottom: "4px" }}
                                            >
                                                <span className="group-hover:text-[var(--accent)] transition-colors duration-200 inline-flex items-center gap-1.5">
                                                    {exp.title}
                                                    <svg
                                                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        style={{ color: "var(--accent)" }}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </span>
                                            </h3>
                                            <p
                                                className="text-sm font-medium"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {exp.company}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed mt-3 mb-4"
                                            style={{ color: "var(--text-muted)", opacity: 0.85 }}
                                        >
                                            {exp.description}
                                        </p>

                                        {/* Tech badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="font-mono text-xs px-2.5 py-0.5 rounded-md"
                                                    style={{
                                                        color: "var(--accent)",
                                                        background: "var(--tech-badge-bg)",
                                                        border: "1px solid var(--tech-badge-border)",
                                                        letterSpacing: "0.02em",
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Orta: Dikey ayırıcı çizgi ── */}
                    <div
                        className="hidden md:block"
                        style={{
                            width: "1px",
                            alignSelf: "stretch",
                            margin: "0 48px",
                            background: "linear-gradient(to bottom, transparent 0%, var(--border-accent) 15%, var(--border-accent) 85%, transparent 100%)",
                            opacity: 0.4,
                        }}
                    />

                    {/* ── Sağ kolon: 3D model alanı ── */}
                    <div className="hidden md:block" style={{ minHeight: "400px" }} />
                </div>
            </div>
        </section>
    );
}
