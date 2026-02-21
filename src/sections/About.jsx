"use client";
/*
  sections/About.jsx — CV'ye göre güncellenmiş Hakkımda
  
  Değişiklikler:
  - Bio CV'den güncellendi
  - Astrophotographer referansları kaldırıldı
  - Skills CV'deki tam liste ile güncellendi
  - Stats güncellendi (Scholarship bilgisi eklendi)
*/

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function AvatarFallback() {
    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--bg-surface), var(--bg-card))" }}
        >
            <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black"
                style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-dim))",
                    color: "var(--bg)",
                }}
            >
                AE
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--text-dim)" }}>
                Add public/profile.jpg
            </p>
        </div>
    );
}

/* CV'deki tam skill listesi */
const skills = [
    {
        category: "Languages",
        color: "var(--accent)",
        items: ["Java", "Python", "C", "JavaScript", "HTML/CSS", "Assembly"],
    },
    {
        category: "Frameworks & Libraries",
        color: "var(--accent-dim)",
        items: ["Spring Boot", "React", "Next.js", "FastAPI"],
    },
    {
        category: "AI & Data",
        color: "var(--blue)",
        items: ["RAG", "Fine-Tuning", "Vector Search", "AI/ML Integration"],
    },
    {
        category: "Architecture & Tools",
        color: "var(--gold)",
        items: ["Microservices", "Docker", "PostgreSQL", "Git", "IntelliJ", "PyCharm"],
    },
];

const stats = [
    { value: "3rd", label: "Year at Yeditepe" },
    { value: "4+", label: "Projects" },
    { value: "Full", label: "Merit Scholarship" },
    { value: "SERG", label: "Research Group" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function About() {
    const [imgError, setImgError] = useState(false);

    return (
        <section
            id="about"
            className="relative py-28"
            style={{ background: "var(--bg-surface)" }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-20"
                style={{
                    background: "linear-gradient(to bottom, var(--bg), var(--bg-surface))",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Başlık */}
                <motion.div
                    className="mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="section-label">01. About Me</p>
                    <h2
                        className="text-4xl md:text-5xl font-black"
                        style={{ color: "var(--text)" }}
                    >
                        Who I am
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Sol: Fotoğraf + Stats */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Profil fotoğrafı */}
                        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                            <div
                                className="absolute inset-0 rounded-lg translate-x-3 translate-y-3"
                                style={{
                                    border: "2px solid var(--accent)",
                                    borderRadius: "0.5rem",
                                    opacity: 0.4,
                                }}
                            />
                            <div
                                className="card relative overflow-hidden rounded-lg aspect-[4/5]"
                                style={{ background: "var(--bg-card)" }}
                            >
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
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(13,27,46,0.5) 0%, transparent 60%)",
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mt-10">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="card p-4 text-center rounded-lg"
                                >
                                    <p
                                        className="text-xl font-black font-mono"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="text-xs mt-1"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {stat.label}
                                    </p>
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
                        {/* Bio */}
                        <div className="space-y-4 mb-10">
                            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                I am a{" "}
                                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                                    Computer Engineering student
                                </span>{" "}
                                at Yeditepe University (Expected June 2027), enrolled on a{" "}
                                <span style={{ color: "var(--accent)" }}>
                                    Full Merit Scholarship
                                </span>{" "}
                                based on my YKS ranking of 2,158 out of 2.5M+ students.
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                As an{" "}
                                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                                    Undergraduate Research Assistant at SERG
                                </span>
                                , I contribute to large-scale projects including the Smart Parking
                                Management System (20+ member cross-functional team) and an
                                AI-Powered Driver Guidance System.
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                I specialize in building scalable backend systems with{" "}
                                <span style={{ color: "var(--accent)" }}>Java Spring Boot</span>{" "}
                                and{" "}
                                <span style={{ color: "var(--accent)" }}>Python</span>, focusing
                                on microservice architectures, AI integration, and clean,
                                maintainable code.
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                Outside engineering, I serve as{" "}
                                <span style={{ color: "var(--gold)" }}>
                                    Sponsorship Coordinator at IEEE Yeditepe
                                </span>
                                , managing corporate relations and leading team initiatives.
                            </p>
                        </div>

                        {/* Skills */}
                        <div>
                            <p
                                className="font-mono text-xs tracking-widest uppercase mb-5"
                                style={{ color: "var(--text-muted)" }}
                            >
                                Tech Stack
                            </p>
                            <div className="space-y-4">
                                {skills.map((group) => (
                                    <div key={group.category}>
                                        <p
                                            className="text-xs font-semibold mb-2 font-mono"
                                            style={{ color: group.color }}
                                        >
                                            {group.category}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 rounded text-xs font-mono border transition-all duration-200 cursor-default"
                                                    style={{
                                                        color: "var(--text-muted)",
                                                        borderColor: "var(--border)",
                                                        background: "var(--bg-card)",
                                                    }}
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
