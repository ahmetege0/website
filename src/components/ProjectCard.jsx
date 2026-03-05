"use client";
/*
  components/ProjectCard.jsx
  
  Düzeltme: lang artık prop'tan DEĞİL, doğrudan useLanguage() hook'undan geliyor.
  Bu, prop threading sorununu (lang'ın bir yerden gitme riski) ortadan kaldırır.
  React Context değiştiğinde bileşen otomatik yeniden render olur.
*/

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectCard({ project, onClick, t }) {
    const { lang } = useLanguage(); /* ← Direkt context'ten */

    const {
        title,
        shortDescription,
        shortDescriptionTr,
        tech,
        status,
        role,
        coverColor,
    } = project;

    /* Dile göre doğru kısa açıklamayı seç */
    const description =
        lang === "tr" && shortDescriptionTr ? shortDescriptionTr : shortDescription;

    return (
        <motion.div
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClick}
            className="cursor-pointer"
        >
            <div
                className="card h-full flex flex-col overflow-hidden rounded-xl group"
                style={{
                    background: "rgba(var(--bg-card-rgb), 0.55)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}
            >
                {/* Üst renkli çubuk */}
                <div
                    className="h-0.5 transition-all duration-300 group-hover:h-1"
                    style={{
                        background: `linear-gradient(to right, ${coverColor}, var(--accent))`,
                    }}
                />

                <div className="p-6 flex flex-col flex-1">
                    {/* Üst satır: Status + ok ikonu */}
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className="font-mono text-xs px-2.5 py-1 rounded-sm"
                            style={{
                                background:
                                    status === "In Progress"
                                        ? "rgba(242, 202, 80, 0.1)"
                                        : "var(--tech-badge-bg)",
                                color:
                                    status === "In Progress"
                                        ? "var(--gold)"
                                        : "var(--accent)",
                            }}
                        >
                            {status === "In Progress"
                                ? t?.inProgress || "In Progress"
                                : t?.completed || "Completed"}
                        </span>

                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--text-dim)" }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </div>

                    {/* Başlık */}
                    <h3
                        className="text-lg font-bold mb-1 leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text)" }}
                    >
                        {title}
                    </h3>

                    {/* Rol */}
                    <p className="font-mono text-xs mb-3" style={{ color: "var(--accent-dim)" }}>
                        {role}
                    </p>

                    {/* Açıklama — dile göre değişiyor */}
                    <p
                        className="text-base leading-relaxed mb-5 flex-1"
                        style={{ color: "var(--text-muted)", fontWeight: 450 }}
                    >
                        {description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {tech.slice(0, 5).map((item) => (
                            <span
                                key={item}
                                className="font-mono text-xs px-2 py-0.5 rounded border"
                                style={{
                                    color: "var(--text-muted)",
                                    borderColor: "var(--border)",
                                    background: "var(--bg-surface)",
                                }}
                            >
                                {item}
                            </span>
                        ))}
                        {tech.length > 5 && (
                            <span
                                className="font-mono text-xs px-2 py-0.5"
                                style={{ color: "var(--text-dim)" }}
                            >
                                +{tech.length - 5} more
                            </span>
                        )}
                    </div>

                    {/* Alt çizgi */}
                    <div
                        className="text-xs flex items-center gap-1 pt-3 border-t"
                        style={{ color: "var(--accent)", borderColor: "var(--border)" }}
                    >
                        <span>{t?.clickHint || "Click to view details"}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
