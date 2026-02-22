"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function PhotosPage() {
    const { lang } = useLanguage();

    return (
        <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center max-w-md"
            >
                {/* İkon */}
                <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl"
                    style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                    📷
                </div>

                {/* Başlık */}
                <h1 className="text-3xl font-black mb-3" style={{ color: "var(--text)" }}>
                    {lang === "tr" ? "Fotoğraflar" : "Photos"}
                </h1>

                {/* Alt yazı */}
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                    {lang === "tr"
                        ? "Bu sayfa şu an geliştiriliyor. Yakında anılar ve kareler burada olacak."
                        : "This page is under construction. Memories and moments will be here soon."}
                </p>

                {/* Durum badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
                    style={{
                        background: "rgba(100, 255, 218, 0.08)",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                        color: "var(--accent)",
                    }}
                >
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                    {lang === "tr" ? "Geliştiriliyor" : "Coming Soon"}
                </div>

                {/* Geri dön */}
                <div>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                        style={{ color: "var(--accent)" }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {lang === "tr" ? "Ana sayfaya dön" : "Back to home"}
                    </a>
                </div>
            </motion.div>
        </main>
    );
}
