"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { lang } = useLanguage();
    const t = translations[lang].projects;

    useEffect(() => {
        const checkHash = () => {
            const hash = window.location.hash;
            if (hash.startsWith("#projects/")) {
                const slug = hash.replace("#projects/", "");
                const project = projects.find((p) => p.slug === slug);
                if (project) {
                    setSelectedProject(project);
                } else {
                    setSelectedProject(null);
                }
            } else if (hash === "" || hash.startsWith("#projects")) {
                // Sadece #projects veya modalsız durumlar için (diğer hashlerde modalın kapanması istenirse if logic değiştirilebilir)
                // Ancak başka section'a gidildiğinde modalın kapanması mantıklıdır.
                setSelectedProject(null);
            }
        };

        checkHash();
        
        if (window.location.hash.startsWith("#projects/")) {
            setTimeout(() => {
                const section = document.getElementById("projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }

        window.addEventListener("hashchange", checkHash);
        window.addEventListener("popstate", checkHash);
        return () => {
            window.removeEventListener("hashchange", checkHash);
            window.removeEventListener("popstate", checkHash);
        };
    }, []);

    const handleOpenProject = (project) => {
        setSelectedProject(project);
        window.history.pushState(null, "", `#projects/${project.slug}`);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
        window.history.pushState(null, "", window.location.pathname + window.location.search + "#projects");
    };

    return (
        <section id="projects" className="relative py-28">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">{t.label}</p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text)" }}>
                            {t.title}
                        </h2>
                        <p className="font-mono text-xs max-w-xs" style={{ color: "var(--text-muted)" }}>
                            {t.hint}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.slug} variants={cardVariants}>
                            <ProjectCard
                                project={project}
                                onClick={() => handleOpenProject(project)}
                                t={t}
                                lang={lang}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={handleCloseProject}
                        t={t}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
