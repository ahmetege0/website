"use client";
/*
  sections/Contact.jsx — Güncel iletişim bilgileri
  
  Güncellendi:
  - GitHub: ahmetege0 (önceki: ahmetege)
  - LinkedIn: ahmet-ege-cse (önceki: ahmetege) 
  - Email: aege0601@gmail.com
*/

import { motion } from "framer-motion";

const contactLinks = [
    {
        label: "GitHub",
        value: "@ahmetege0",
        href: "https://github.com/ahmetege0",
        description: "Code & repositories",
        color: "var(--text)",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        value: "ahmet-ege-cse",
        href: "https://www.linkedin.com/in/ahmet-ege-cse/",
        description: "Professional network",
        color: "#0077B5",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Email",
        value: "aege0601@gmail.com",
        href: "mailto:aege0601@gmail.com",
        description: "Direct message",
        color: "var(--gold)",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-28"
            style={{ background: "var(--bg-surface)" }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-20"
                style={{
                    background: "linear-gradient(to bottom, var(--bg), var(--bg-surface))",
                }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Başlık */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">03. Contact</p>
                    <h2
                        className="text-4xl md:text-5xl font-black mb-6"
                        style={{ color: "var(--text)" }}
                    >
                        Get in touch
                    </h2>
                    <p
                        className="text-base max-w-md mx-auto leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                    >
                        I&apos;m actively looking for new opportunities. Whether it&apos;s
                        a full-time role, internship, or just a conversation — my inbox is
                        always open.
                    </p>
                </motion.div>

                {/* İletişim kartları */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {contactLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                            }}
                            whileHover={{ y: -4 }}
                            className="card p-6 text-center flex flex-col items-center gap-3 rounded-xl no-underline"
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{
                                    background: "var(--bg-elevated)",
                                    color: link.color,
                                }}
                            >
                                {link.icon}
                            </div>
                            <div>
                                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>
                                    {link.label}
                                </p>
                                <p
                                    className="font-mono text-xs mt-0.5"
                                    style={{ color: "var(--accent)" }}
                                >
                                    {link.value}
                                </p>
                                <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                                    {link.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.p
                    className="text-center font-mono text-xs mt-10"
                    style={{ color: "var(--text-dim)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Based in Istanbul, Turkey 🇹🇷 — Open to remote opportunities
                </motion.p>
            </div>
        </section>
    );
}
