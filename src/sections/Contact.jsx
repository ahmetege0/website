"use client";

/*
  Contact.jsx
  Faz 4'te laptop ekranındaki form devralır.
  Bu section sadece GSAP ScrollTrigger için bir scroll hedefi olarak kalır.
  İçerik minimal tutuldu — kullanıcı sayfa altına scroll'ladıkça 3D laptop görünür.
*/

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
    const { lang } = useLanguage();
    const t = translations[lang].contact;

    return (
        <section
            id="contact"
            className="relative"
            style={{ minHeight: "100vh", pointerEvents: "none" }}
        >
            {/* Scroll alanı — laptop ekranı arka planda görünür */}
            <div className="max-w-4xl mx-auto px-6 pt-28 pb-16 relative z-10" style={{ pointerEvents: "auto" }}>
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">{t.label}</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--text)" }}>
                        {t.title}
                    </h2>
                    <p className="text-sm max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
                        {t.description}
                    </p>
                </motion.div>
            </div>

            {/* Alt boşluk — laptop tam yerine oturuncaya kadar scroll alanı */}
            <div style={{ height: "100vh" }} />
        </section>
    );
}
