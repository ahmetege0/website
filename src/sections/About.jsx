"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

/* Profil fotoğrafı yoksa gösterilecek fallback */
function AvatarFallback() {
    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--bg-surface), var(--bg-card))" }}
        >
            <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dim))", color: "var(--bg)" }}
            >
                AE
            </div>
        </div>
    );
}

/* Skill kategorileri — sabit, sadece kategori etiketleri çevrilir */
const skillGroups = [
    { color: "var(--accent)", items: ["Java", "Python", "C", "JavaScript", "HTML/CSS", "Assembly"] },
    { color: "var(--accent-dim)", items: ["Spring Boot", "React", "Next.js", "FastAPI"] },
    { color: "var(--blue)", items: ["RAG", "Fine-Tuning", "Vector Search", "AI/ML Integration"] },
    { color: "var(--gold)", items: ["Microservices", "Docker", "PostgreSQL", "Git", "IntelliJ"] },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* 
  BioParagraph: translations'daki part-style sistemini render eder.
  parts = [{ t: "metin", style: "muted|text|accent|gold" }, ...]
*/
function BioParagraph({ parts }) {
    const styleMap = {
        muted: { color: "var(--text-muted)" },
        text: { color: "var(--text)", fontWeight: 600 },
        accent: { color: "var(--accent)" },
        gold: { color: "var(--gold)" },
    };
    return (
        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {parts.map((part, i) => (
                <span key={i} style={styleMap[part.style] || {}}>
                    {part.t}
                </span>
            ))}
        </p>
    );
}

export default function About() {
    const [imgError, setImgError] = useState(false);
    const { lang } = useLanguage();
    const t = translations[lang].about;

    return (
        <section
            id="about"
            className="relative py-28"
        >

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label">{t.label}</p>
                    <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text)" }}>
                        {t.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Sol: Fotoğraf + Stats */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                            <div
                                className="absolute inset-0 rounded-lg translate-x-3 translate-y-3"
                                style={{ border: "2px solid var(--accent)", borderRadius: "0.5rem", opacity: 0.4 }}
                            />
                            <div className="card relative overflow-hidden rounded-lg aspect-[4/5]" style={{ background: "var(--bg-card)" }}>
                                {imgError ? (
                                    <AvatarFallback />
                                ) : (
                                    <Image
                                        src="/profile.jpg"
                                        alt="Ahmet Ege"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        onError={() => setImgError(true)}
                                    />
                                )}
                                {!imgError && (
                                    <div
                                        className="absolute inset-0"
                                        style={{ background: "linear-gradient(to top, var(--photo-overlay) 0%, transparent 60%)" }}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-10">
                            {t.stats.map((stat) => (
                                <div key={stat.label} className="card p-4 text-center rounded-lg">
                                    <p className="text-xl font-black font-mono" style={{ color: "var(--accent)" }}>{stat.value}</p>
                                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sağ: Bio + Skills */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.15 }}
                    >
                        <div className="space-y-4 mb-10">
                            {t.bio.map((paragraph, i) => (
                                <BioParagraph key={i} parts={paragraph.parts} />
                            ))}
                        </div>

                        <div>
                            <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
                                {t.techStack}
                            </p>
                            <div className="space-y-4">
                                {skillGroups.map((group, i) => (
                                    <div key={i}>
                                        <p className="text-xs font-semibold mb-2 font-mono" style={{ color: group.color }}>
                                            {t.skillCategories[i]}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 rounded text-xs font-mono border transition-all duration-200 cursor-default"
                                                    style={{ color: "var(--text-muted)", borderColor: "var(--border)", background: "var(--bg-card)" }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.borderColor = group.color;
                                                        e.currentTarget.style.color = group.color;
                                                        e.currentTarget.style.background = "rgba(100,255,218,0.04)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.borderColor = "var(--border)";
                                                        e.currentTarget.style.color = "var(--text-muted)";
                                                        e.currentTarget.style.background = "var(--bg-card)";
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
