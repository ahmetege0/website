/*
  lib/translations.js — Tüm site metinleri (EN + TR)

  NOT: JSX yok — saf string ve nesne yapısı.
       Bileşenler kendi JSX'lerini bu string'lerden oluşturur.
*/

export const translations = {
    /* ==================== ENGLISH ==================== */
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
        },

        hero: {
            greeting: "Hi, my name is",
            tagline: "I build scalable software.",
            description:
                "Software Engineer & Undergraduate Research Assistant at SERG, Yeditepe University. Focused on backend systems with Java Spring Boot, Python, and microservice architectures.",
            cta: "View My Work",
            downloadCv: "Download CV",
            techLabel: "Stack",
        },

        about: {
            label: "About Me",
            title: "About me",
            /* Bio paragrafları: {accent} = vurgu rengi, {text} = ana metin rengi, {gold} = altın renk */
            bio: [
                {
                    parts: [
                        { t: "I am a ", style: "muted" },
                        { t: "Computer Engineering student", style: "text" },
                        { t: " at Yeditepe University (Expected June 2027), enrolled on a ", style: "muted" },
                        { t: "Full Merit Scholarship", style: "gold" },
                        { t: " based on my YKS ranking of 2,158 out of 2.5M+ students.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "As an ", style: "muted" },
                        { t: "Undergraduate Research Assistant at SERG", style: "gold" },
                        { t: ", I contribute to large-scale projects including the Smart Parking Management System (20+ member team) and an AI-Powered Driver Guidance System.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "I specialize in building scalable backend systems with ", style: "muted" },
                        { t: "Java Spring Boot", style: "accent" },
                        { t: " and ", style: "muted" },
                        { t: "Python", style: "accent" },
                        { t: ", focusing on microservice architectures, AI integration, and clean, maintainable code.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Outside engineering, I serve as ", style: "muted" },
                        { t: "Sponsorship Coordinator at IEEE Yeditepe", style: "accent" },
                        { t: ", managing corporate relations and leading team initiatives.", style: "muted" },
                    ],
                },
            ],
            techStack: "Tech Stack",
            stats: [
                { value: "3rd", label: "Year at Yeditepe" },
                { value: "4+", label: "Projects" },
                { value: "Full", label: "Merit Scholarship" },
                { value: "SERG", label: "Research Group" },
            ],
            skillCategories: [
                "Languages",
                "Frameworks & Libraries",
                "AI & Data",
                "Architecture & Tools",
            ],
        },

        experience: {
            label: "Experience",
            title: "Where I've worked",
            entries: [
                {
                    period: "May 2025 — Present",
                    title: "Undergraduate Research Assistant",
                    company: "SERG · Yeditepe University",
                    href: "https://sites.google.com/view/yeditepeserg/home",
                    description:
                        "Contributing to the Smart Parking Management System, a large-scale project with a cross-functional team of 20+ members. Also collaborating on the AI-Powered Driver Guidance System — contributing to architectural design and requirements engineering for a user-centric decision support system.",
                    tech: ["Java", "Spring Boot", "Python", "AI/ML", "Microservices", "Architecture Design"],
                },
                {
                    period: "Sep 2024 — Oct 2024",
                    title: "Software Engineer Intern",
                    company: "Game Actor",
                    href: "https://www.game.actor/",
                    description:
                        "Developed responsive and modern user interfaces leveraging React and component-based architecture to ensure modularity, high performance, and code reusability across web applications. (Volunteer)",
                    tech: ["React", "JavaScript", "HTML/CSS", "Component Architecture"],
                },
            ],
        },

        projects: {
            label: "Projects",
            title: "Things I've built",
            hint: "Click any card to view details, demo & links",
            inProgress: "In Progress",
            completed: "Completed",
            clickHint: "Click to view details",
            technologies: "Technologies",
        },

        contact: {
            label: "Contact",
            title: "Get in touch",
            description:
                "I'm actively looking for new opportunities. Whether it's a full-time role, internship, or just a conversation — my inbox is always open.",
            location: "Based in Istanbul, Turkey 🇹🇷 — Open to remote opportunities",
            links: [
                { label: "GitHub", value: "@ahmetege0", description: "Code & repositories" },
                { label: "LinkedIn", value: "ahmet-ege-cse", description: "Professional network" },
                { label: "Email", value: "aege0601@gmail.com", description: "Direct message" },
                { label: "Phone", value: "+90 552 705 49 64", description: "Call or WhatsApp" },
            ],
        },

        footer: {
            builtBy: "Designed & Built by Ahmet Ege",
        },
    },

    /* ==================== TURKISH ==================== */
    tr: {
        nav: {
            about: "Hakkımda",
            experience: "Deneyim",
            projects: "Projeler",
            contact: "İletişim",
        },

        hero: {
            greeting: "Merhaba, ben",
            tagline: "Ölçeklenebilir yazılımlar\ngeliştiriyorum.",
            description:
                "SERG, Yeditepe Üniversitesi bünyesinde Yazılım Mühendisi ve Lisans Araştırma Asistanıyım. Java Spring Boot, Python ve mikroservis mimarilerinde backend sistemlerine odaklanıyorum.",
            cta: "Projelerimi Gör",
            downloadCv: "CV İNDİR",
            techLabel: "Teknolojiler",
        },

        about: {
            label: "Hakkımda",
            title: "Ben kimim?",
            bio: [
                {
                    parts: [
                        { t: "Yeditepe Üniversitesi'nde ", style: "muted" },
                        { t: "Bilgisayar Mühendisliği", style: "text" },
                        { t: " öğrencisiyim (Beklenen mezuniyet: Haziran 2027). YKS'de 2,5M+ aday arasında 2.158. sırayı alarak ", style: "muted" },
                        { t: "Tam Burs", style: "gold" },
                        { t: " ile okumaktayım.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "SERG'de ", style: "muted" },
                        { t: "Lisans Araştırma Asistanı", style: "gold" },
                        { t: " olarak Smart Parking Management System (20+ kişilik ekip) ve AI Tabanlı Sürücü Rehberlik Sistemi gibi büyük ölçekli projelere katkıda bulunuyorum.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Java Spring Boot", style: "accent" },
                        { t: " ve ", style: "muted" },
                        { t: "Python", style: "accent" },
                        { t: " ile ölçeklenebilir backend sistemler geliştirmeyi, mikroservis mimarileri ve AI entegrasyonuna odaklanmayı uzmanlık alanım olarak görüyorum.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Mühendislik dışında ", style: "muted" },
                        { t: "IEEE Yeditepe'de Sponsorluk Koordinatörü", style: "accent" },
                        { t: " olarak kurumsal ilişkileri yönetiyor ve ekip girişimlerine liderlik ediyorum.", style: "muted" },
                    ],
                },
            ],
            techStack: "Teknoloji Yığını",
            stats: [
                { value: "3.", label: "Yeditepe'de Yıl" },
                { value: "4+", label: "Proje" },
                { value: "Tam", label: "Burs" },
                { value: "SERG", label: "Araştırma Grubu" },
            ],
            skillCategories: [
                "Diller",
                "Kütüphane & Frameworkler",
                "Yapay Zeka & Veri",
                "Mimari & Araçlar",
            ],
        },

        experience: {
            label: "Deneyim",
            title: "Çalıştığım yerler",
            entries: [
                {
                    period: "May 2025 — Günümüz",
                    title: "Lisans Araştırma Asistanı",
                    company: "SERG · Yeditepe Üniversitesi",
                    href: "https://sites.google.com/view/yeditepeserg/home",
                    description:
                        "20+ kişilik çapraz fonksiyonlu ekiple yürütülen Smart Parking Management System projesine katkıda bulunuyorum. Ayrıca AI Tabanlı Sürücü Rehberlik Sistemi için mimari tasarım ve gereksinim mühendisliği üzerine çalışıyorum.",
                    tech: ["Java", "Spring Boot", "Python", "AI/ML", "Mikroservisler", "Mimari Tasarım"],
                },
                {
                    period: "Eyl 2024 — Eki 2024",
                    title: "Yazılım Mühendisi Stajyeri",
                    company: "Game Actor",
                    href: "https://www.game.actor/",
                    description:
                        "React ve bileşen tabanlı mimari kullanarak web uygulamalarında modern, duyarlı kullanıcı arayüzleri geliştirdim. Modülerlik, yüksek performans ve kod yeniden kullanılabilirliğini ön planda tuttum. (Gönüllü staj)",
                    tech: ["React", "JavaScript", "HTML/CSS", "Bileşen Mimarisi"],
                },
            ],
        },

        projects: {
            label: "Projeler",
            title: "Geliştirdiklerim",
            hint: "Detay, demo ve linkleri görmek için karta tıkla",
            inProgress: "Devam Ediyor",
            completed: "Tamamlandı",
            clickHint: "Detayları gör",
            technologies: "Teknolojiler",
        },

        contact: {
            label: "İletişim",
            title: "İletişime geç",
            description:
                "Yeni fırsatlar arıyorum. İster tam zamanlı pozisyon, ister staj, isterse sadece bir sohbet olsun — mesajınıza her zaman açığım.",
            location: "İstanbul, Türkiye 🇹🇷 — Uzaktan çalışmaya açık",
            links: [
                { label: "GitHub", value: "@ahmetege0", description: "Kod & projeler" },
                { label: "LinkedIn", value: "ahmet-ege-cse", description: "Profesyonel ağ" },
                { label: "Email", value: "aege0601@gmail.com", description: "Doğrudan mesaj" },
                { label: "Telefon", value: "+90 552 705 49 64", description: "Ara veya WhatsApp" },
            ],
        },

        footer: {
            builtBy: "Tasarım & Geliştirme: Ahmet Ege",
        },
    },
};
