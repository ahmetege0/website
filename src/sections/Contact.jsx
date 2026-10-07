"use client";

/*
  Contact.jsx
  • Masaüstü (≥1024px, 3D sahneyle aynı kırılım): başlık + 3D laptop zoom için
    scroll boşluğu → altta form (laptop'u tema arka planına doğru söndüren gradient).
  • Mobil/tablet (<1024px): başlık → hızlı iletişim kartları → ayraç → form.
  Form tek instance; #contact-form-section Scene.jsx'teki p5 trigger'ı için gerekli.
*/

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { CONTACT_HREFS, linkTarget, ContactIcon } from "@/lib/contactLinks";

const COLORS = ["var(--text)", "#0077B5", "var(--gold)", "#25D366"];

/* ──────────────────────────────────────────── */
/* Contact Form Component                       */
/* ──────────────────────────────────────────── */
function ContactFormSection({ tf }) {
    const [formData, setFormData] = useState({ subject: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("sent");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <motion.div
            className="p-6 sm:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            style={{
                maxWidth: "560px",
                margin: "0 auto",
                background: "var(--bg-card)",
                border: "1px solid var(--border-accent)",
                borderRadius: "16px",
                boxShadow: "0 0 60px var(--accent-glow), 0 8px 32px rgba(0,0,0,0.15)",
            }}
        >
            {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <div style={{ fontSize: "2.8rem", marginBottom: "16px" }}>✅</div>
                    <p style={{ fontSize: "1.1rem", color: "var(--accent)", fontWeight: 700 }}>
                        {tf.successTitle}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "6px" }}>
                        {tf.successSub}
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                        <label htmlFor="contact-subject" className="contact-label">{tf.subject}</label>
                        <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            className="contact-input"
                            placeholder={tf.subjectPlaceholder}
                            required
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-email" className="contact-label">{tf.email}</label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            className="contact-input"
                            placeholder={tf.emailPlaceholder}
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="contact-label">{tf.message}</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            className="contact-input"
                            placeholder={tf.messagePlaceholder}
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            style={{ resize: "vertical", lineHeight: "1.6", minHeight: "120px" }}
                        />
                    </div>

                    {status === "error" && (
                        <p style={{ fontSize: "0.8rem", color: "#fc8181", textAlign: "center" }}>
                            {tf.errorText}
                        </p>
                    )}

                    <button type="submit" className="contact-submit" disabled={status === "sending"}>
                        {status === "sending" ? tf.sending : tf.send}
                    </button>
                </form>
            )}
        </motion.div>
    );
}

/* ──────────────────────────────────────────── */
/* Section header (label + title + description) */
/* ──────────────────────────────────────────── */
function ContactHeader({ t, className }) {
    return (
        <motion.div
            className={`text-center ${className}`}
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
    );
}

/* ──────────────────────────────────────────── */
/* Mobile quick links — 2×2 kompakt kartlar     */
/* ──────────────────────────────────────────── */
function QuickLinks({ links }) {
    return (
        <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
            {links.map((link, i) => (
                <motion.a
                    key={link.label}
                    href={CONTACT_HREFS[i]}
                    target={linkTarget(CONTACT_HREFS[i])}
                    rel="noopener noreferrer"
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                    whileTap={{ scale: 0.97 }}
                    className="card p-4 flex flex-col items-start gap-3 rounded-xl no-underline"
                >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--bg-elevated)", color: COLORS[i] }}
                    >
                        <ContactIcon index={i} className="w-5 h-5" />
                    </div>
                    <div className="w-full min-w-0">
                        <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{link.label}</p>
                        <p className="font-mono text-[11px] mt-0.5 truncate" style={{ color: "var(--accent)" }}>{link.value}</p>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
}

/* ──────────────────────────────────────────── */
/* Main Contact Section                         */
/* ──────────────────────────────────────────── */
export default function Contact() {
    const { lang } = useLanguage();
    const t = translations[lang].contact;

    return (
        <section id="contact" className="relative w-full">

            {/* ========================================= */}
            {/* DESKTOP — space for 3D laptop animation   */}
            {/* ========================================= */}
            <div className="hidden lg:block" style={{ minHeight: "100vh", pointerEvents: "none" }}>
                <div className="max-w-4xl mx-auto px-6 pt-28 pb-16 relative z-10" style={{ pointerEvents: "auto" }}>
                    <ContactHeader t={t} className="mb-10" />
                </div>
                {/* Scroll space: laptop zoom tamamlansın + ikonlar görünsün, sonra form gelsin */}
                <div style={{ height: "180vh" }} />
            </div>

            {/* ========================================= */}
            {/* FORM — desktop: laptop'un altında          */}
            {/*        mobil: başlık + kartlar + form      */}
            {/* ========================================= */}
            <div
                id="contact-form-section"
                className="relative px-6 pt-8 pb-16 lg:pt-[120px] lg:pb-[120px] lg:bg-[linear-gradient(to_bottom,transparent_0px,var(--bg)_160px)]"
            >
                <div className="max-w-xl mx-auto">
                    <div className="lg:hidden">
                        <ContactHeader t={t} className="mb-10" />
                        <QuickLinks links={t.links} />

                        {/* Ayraç */}
                        <div className="flex items-center gap-4 my-10">
                            <span className="flex-1 h-px" style={{ background: "var(--border-accent)" }} />
                            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                                {t.form.divider}
                            </span>
                            <span className="flex-1 h-px" style={{ background: "var(--border-accent)" }} />
                        </div>
                    </div>

                    <ContactFormSection tf={t.form} />

                    <motion.p
                        className="text-center font-mono text-xs mt-10"
                        style={{ color: "var(--text-dim)" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {t.location}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
