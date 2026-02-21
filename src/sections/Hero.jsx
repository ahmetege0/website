"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang].hero;

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <div
                className="orb absolute w-[700px] h-[700px] -top-40 -left-40"
                style={{ background: "var(--accent)", opacity: 0.03, animation: "drift-1 20s ease-in-out infinite" }}
            />
            <div
                className="orb absolute w-[500px] h-[500px] bottom-0 right-0"
                style={{ background: "var(--blue)", opacity: 0.05, animation: "drift-2 25s ease-in-out infinite" }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
            />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-sm font-semibold uppercase tracking-[0.12em] mb-5"
                    style={{ color: "var(--accent)" }}
                >
                    {t.greeting}
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
                    style={{ color: "var(--text)" }}
                >
                    Ahmet Ege.
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-8"
                    style={{ color: "var(--text-muted)" }}
                >
                    {t.tagline}
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                    style={{ color: "var(--text-muted)" }}
                >
                    {t.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                    <a href="#projects" className="btn-primary">
                        {t.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="https://github.com/ahmetege0" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        GitHub
                    </a>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-14 flex flex-wrap gap-3">
                    {["Java", "Spring Boot", "Python", "Microservices", "React", "Next.js"].map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 rounded border"
                            style={{ color: "var(--text-muted)", borderColor: "var(--border)", background: "rgba(100, 255, 218, 0.03)" }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

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
