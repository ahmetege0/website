"use client";
/*
  sections/Hero.jsx — Temiz, Profesyonel Yeniden Tasarım
  
  Değişiklikler:
  - Dot-grid kaldırıldı (sade arka plan)
  - Animasyonlu gradient metin kaldırıldı (göz yorucu değil)
  - "Astrophotographer" kaldırıldı → "Software Engineer"
  - Orb'lar çok daha hafif (opacity 0.04-0.06 — neredeyse fark edilmez derinlik)
  - Brittany Chiang / Antigravity tarzı net, profesyonel düzen
*/

import { motion } from "framer-motion";

/* Stagger animasyon container */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* 
        Arka plan: Tamamen sade lacivert — dot-grid yok
        Sadece iki hafif "glow" orb ile derinlik hissi
      */}
            <div
                className="orb absolute w-[700px] h-[700px] -top-40 -left-40"
                style={{
                    background: "var(--accent)",
                    opacity: 0.03,
                    animation: "drift-1 20s ease-in-out infinite",
                }}
            />
            <div
                className="orb absolute w-[500px] h-[500px] bottom-0 right-0"
                style={{
                    background: "var(--blue)",
                    opacity: 0.05,
                    animation: "drift-2 25s ease-in-out infinite",
                }}
            />

            {/* Alt gradient — section geçişini yumuşatır */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{
                    background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
                }}
            />

            {/* Ana içerik */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Küçük üst etiket — monospace font, profesyonel */}
                <motion.p
                    variants={itemVariants}
                    className="font-mono text-sm mb-5"
                    style={{ color: "var(--accent)" }}
                >
                    Hi, my name is
                </motion.p>

                {/* İsim — büyük, bold, sade beyaz */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
                    style={{ color: "var(--text)" }}
                >
                    Ahmet Ege.
                </motion.h1>

                {/* 
          Unvan — muted renkte, animasyonsuz gradient
          "gradient-shift" animasyonu kaldırıldı — sade duruyor
        */}
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-8"
                    style={{ color: "var(--text-muted)" }}
                >
                    I build scalable software.
                </motion.h2>

                {/* Açıklama */}
                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                    style={{ color: "var(--text-muted)" }}
                >
                    Software Engineer & Undergraduate Research Assistant at{" "}
                    <span
                        className="font-semibold"
                        style={{ color: "var(--text)" }}
                    >
                        SERG, Yeditepe University
                    </span>
                    . Focused on backend systems with{" "}
                    <span style={{ color: "var(--accent)" }}>Java Spring Boot</span>,{" "}
                    <span style={{ color: "var(--accent)" }}>Python</span>, and microservice
                    architectures.
                </motion.p>

                {/* CTA Butonları */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#projects" className="btn-primary">
                        View My Work
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/ahmetege0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        GitHub
                    </a>
                </motion.div>

                {/* Hızlı teknoloji listesi */}
                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex flex-wrap gap-3"
                >
                    {[
                        "Java",
                        "Spring Boot",
                        "Python",
                        "Microservices",
                        "React",
                        "Next.js",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 rounded border"
                            style={{
                                color: "var(--text-muted)",
                                borderColor: "var(--border)",
                                background: "rgba(100, 255, 218, 0.03)",
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll aşağı göstergesi */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div
                    className="w-5 h-9 rounded-full border-2 flex items-start justify-center p-1"
                    style={{ borderColor: "var(--text-dim)" }}
                >
                    <motion.div
                        className="w-1 h-2 rounded-full"
                        style={{ background: "var(--accent)" }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
