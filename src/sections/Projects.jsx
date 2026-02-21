"use client";
/*
  sections/Projects.jsx — Güncel proje bölümü
  
  Değişiklikler:
  - Tüm 4 proje CV'den eklendi
  - İnteraktif modal sistemi eklendi
    → useState ile seçili projeyi tutuyoruz
    → ProjectModal bileşeni selectedProject varsa render edilir
  - AnimatePresence: Modal'ın açılıp kapanma animasyonu için
*/

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/projects";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function Projects() {
    /*
      selectedProject: Tıklanan proje objesi (veya null)
      - null → modal kapalı
      - proje objesi → modal açık ve bu projeyi gösteriyor
    */
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-28">
            <div className="max-w-6xl mx-auto px-6">
                {/* Başlık */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">02. Projects</p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <h2
                            className="text-4xl md:text-5xl font-black"
                            style={{ color: "var(--text)" }}
                        >
                            Things I&apos;ve built
                        </h2>
                        <p
                            className="font-mono text-xs max-w-xs"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Click any card to view details, demo & links
                        </p>
                    </div>
                </motion.div>

                {/* Proje kartları grid */}
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
                                /*
                                  setSelectedProject: Bu projeyi seç → modal açılır
                                  Arrow function syntax: () => setSelectedProject(project)
                                  Neden fonksiyon? Doğrudan değer geçsek, render sırasında çalışır.
                                  Fonksiyon geçince sadece tıklayınca çalışır.
                                */
                                onClick={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/*
        AnimatePresence: Çocuk bileşenler unmount olunca (yani kaldırılınca)
        exit animasyonunun tamamlanmasını bekler.
        Bu olmadan modal kapanırken animasyon yoktur, aniden kaybolur.
        
        selectedProject null ise ProjectModal render edilmez
        selectedProject bir proje ise ProjectModal açılır
      */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
