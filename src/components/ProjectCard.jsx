"use client";
/*
  components/ProjectCard.jsx — İnteraktif proje kartı
  
  Değişiklikler:
  - onClick prop ile tıklanabilir hale getirildi
  - "View Details" butonu eklendi
  - Hover'da hafif kaldırma efekti korundu
  - Modal bileşeni Projects.jsx'te yönetilir, kart sadece onClick çağırır
*/

import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
    const { title, shortDescription, tech, status, period, role, coverColor } =
        project;

    return (
        <motion.div
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            /*
              onClick: Kartın herhangi bir yerine tıklanınca modal açılır
              cursor-pointer: Kullanıcıya tıklanabilir olduğunu gösterir
            */
            onClick={onClick}
            className="cursor-pointer"
        >
            <div
                className="card h-full flex flex-col overflow-hidden rounded-xl group"
                style={{ background: "var(--bg-card)" }}
            >
                {/* Üst renkli çubuk */}
                <div
                    className="h-0.5 transition-all duration-300 group-hover:h-1"
                    style={{
                        background: `linear-gradient(to right, ${coverColor}, var(--accent))`,
                    }}
                />

                <div className="p-6 flex flex-col flex-1">
                    {/* Üst satır: Status + Yıl */}
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className="font-mono text-xs px-2.5 py-1 rounded-sm"
                            style={{
                                background:
                                    status === "In Progress"
                                        ? "rgba(242, 202, 80, 0.1)"
                                        : "rgba(100, 255, 218, 0.08)",
                                color:
                                    status === "In Progress" ? "var(--gold)" : "var(--accent)",
                            }}
                        >
                            {status === "In Progress" ? "In Progress" : "Completed"}
                        </span>

                        {/* Tıklanabilirliği imo belirtmek için ok ikonu */}
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
                    <p
                        className="font-mono text-xs mb-3"
                        style={{ color: "var(--accent-dim)" }}
                    >
                        {role}
                    </p>

                    {/* Açıklama */}
                    <p
                        className="text-sm leading-relaxed mb-5 flex-1"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {shortDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {tech.slice(0, 5).map((t) => (
                            <span
                                key={t}
                                className="font-mono text-xs px-2 py-0.5 rounded border"
                                style={{
                                    color: "var(--text-muted)",
                                    borderColor: "var(--border)",
                                    background: "var(--bg-surface)",
                                }}
                            >
                                {t}
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

                    {/* Alt link satırı */}
                    <div
                        className="text-xs flex items-center gap-1 pt-3 border-t"
                        style={{ color: "var(--accent)", borderColor: "var(--border)" }}
                    >
                        <span>Click to view details</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
