"use client";
/*
  components/ProjectModal.jsx — Proje detay modal bileşeni
  
  Kullanım:
  - Bir proje kartına tıklandığında açılır
  - Proje ile ilgili tüm detaylar, YouTube video embed, linkler
  - Escape tuşuna veya dışına tıklanınca kapanır
  
  Neden modal?
  - "Flip card" yerine modal kullandık çünkü:
    1) Daha fazla içerik sığar
    2) Video embed yapılabilir
    3) Her ekran boyutunda çalışır
    4) Kullanımı daha net (kart arkası çevirme sezgisel değil)
*/

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProjectModal({ project, onClose, t }) {
    const { lang } = useLanguage();

    /* Dile göre doğru uzun açıklamayı seç */
    const description =
        lang === "tr" && project.longDescriptionTr
            ? project.longDescriptionTr
            : project.longDescription;

    const technologiesLabel =
        translations[lang]?.projects?.technologies || "Technologies";
    /*
      useEffect: Escape tuşu ile modalı kapatmak için
      'keydown' event listener ekleyip temizliyoruz
    */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        // Cleanup: bileşen kalktığında event listener'ı sil
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    /*
      Ayrıca modal açıkken body scroll'u kilitle
      Bu klasik UX pratiği — arka plan kaymasın
    */
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    /* YouTube video ID'sini URL'den çıkar */
    function getYoutubeId(url) {
        if (!url) return null;
        const match = url.match(
            /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/
        );
        return match ? match[1] : null;
    }

    const videoId = getYoutubeId(project.videoUrl);

    return (
        /*
          AnimatePresence — Framer Motion ile açılma/kapanma animasyonu
          modal-overlay → backdrop (karartma katmanı)
        */
        <div
            className="modal-overlay"
            onClick={onClose} /* Dış alana tıklayınca kapat */
        >
            {/* 
        motion.div: Modal kutusu
        onClick e.stopPropagation(): Kutuya tıklayınca kapanmasın
        (overlay'in onClick'ini tetikleme)
      */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl"
                style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-accent)",
                    boxShadow: "0 0 60px var(--accent-glow), 0 25px 60px rgba(0,0,0,0.3)",
                }}
            >
                {/* Üst renkli çubuk */}
                <div
                    className="h-1 rounded-t-xl"
                    style={{
                        background: `linear-gradient(to right, ${project.coverColor}, var(--accent))`,
                    }}
                />

                <div className="p-8">
                    {/* Başlık satırı */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <p
                                className="font-mono text-xs mb-1"
                                style={{ color: "var(--accent)" }}
                            >
                                {project.period}
                            </p>
                            <h2
                                className="text-2xl font-black leading-tight"
                                style={{ color: "var(--text)" }}
                            >
                                {project.title}
                            </h2>
                            <p
                                className="text-sm mt-1"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {project.role} · {project.subtitle}
                            </p>
                        </div>

                        {/* Kapat butonu */}
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg transition-all duration-200 flex-shrink-0"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--accent)";
                                e.currentTarget.style.background = "rgba(100,255,218,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--text-muted)";
                                e.currentTarget.style.background = "transparent";
                            }}
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Status badge */}
                    <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-mono mb-6"
                        style={{
                            background:
                                project.status === "In Progress"
                                    ? "rgba(242, 202, 80, 0.12)"
                                    : "rgba(100, 255, 218, 0.1)",
                            color:
                                project.status === "In Progress"
                                    ? "var(--gold)"
                                    : "var(--accent)",
                        }}
                    >
                        {project.status === "In Progress"
                            ? `⚡ ${t?.inProgress || "In Progress"}`
                            : `✓ ${t?.completed || "Completed"}`}
                    </span>

                    {/* YouTube video embed */}
                    {videoId && (
                        <div className="mb-6 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                            {/*
                YouTube iframe embed
                src: /embed/VIDEO_ID  formatında
                allowFullScreen: Tam ekran butonu göster
              */}
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`${project.title} Demo`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            />
                        </div>
                    )}

                    {/* Uzun açıklama */}
                    <p
                        className="text-base leading-relaxed mb-6"
                        style={{ color: "var(--text-muted)", fontWeight: 450 }}
                    >
                        {description}
                    </p>

                    {/* Teknoloji listesi */}
                    <div className="mb-6">
                        <p
                            className="font-mono text-xs tracking-widest uppercase mb-3"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {technologiesLabel}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 rounded text-xs font-mono border"
                                    style={{
                                        color: "var(--accent)",
                                        borderColor: "var(--border-accent)",
                                        background: "rgba(100, 255, 218, 0.05)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Linkler */}
                    <div
                        className="flex flex-wrap gap-3 pt-5 border-t"
                        style={{ borderColor: "var(--border)" }}
                    >
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs py-2 px-4"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {project.videoUrl && (
                            <a
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs py-2 px-4"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                Demo Video
                            </a>
                        )}
                        {project.externalUrl && (
                            <a
                                href={project.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs py-2 px-4"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
