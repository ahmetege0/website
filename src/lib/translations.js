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
                "AI Researcher & Data Engineer (Long-Term Intern) at Magibu AI and Computer Engineering student at Yeditepe University. Building RAG systems, multilingual datasets, and scalable backends with Java Spring Boot and Python.",
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
                        { t: "Currently a ", style: "muted" },
                        { t: "Long-Term Intern at Magibu AI", style: "gold" },
                        { t: ", working on multilingual datasets for tokenizer research and RAG-based retrieval systems. Before that, I completed the ", style: "muted" },
                        { t: "AI-Native Summer Internship at OBSS", style: "accent" },
                        { t: " and spent over a year at SERG, where our Smart Parking research (20+ member team) grew into ", style: "muted" },
                        { t: "ArcMotus", style: "accent" },
                        { t: ", a company we founded with our advisor.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "I enjoy working where backend engineering meets AI: scalable services with ", style: "muted" },
                        { t: "Java Spring Boot", style: "accent" },
                        { t: " and ", style: "muted" },
                        { t: "Python", style: "accent" },
                        { t: ", RAG pipelines, fine-tuning, and multi-agent LLM systems — always with clean, maintainable code.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Outside engineering, I served as ", style: "muted" },
                        { t: "Sponsorship Coordinator at IEEE Yeditepe", style: "accent" },
                        { t: " (2025–2026), securing corporate sponsorships for the student branch's projects.", style: "muted" },
                    ],
                },
            ],
            techStack: "Tech Stack",
            stats: [
                { value: "4th", label: "Year at Yeditepe" },
                { value: "6+", label: "Projects" },
                { value: "Full", label: "Merit Scholarship" },
                { value: "3", label: "Internships" },
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
                    period: "Aug 2026 — Present",
                    title: "AI Researcher & Data Engineer · Long-Term Intern",
                    company: "Magibu AI",
                    href: "https://magibu.ai/",
                    description:
                        "Collecting, cleaning, and organizing multilingual datasets — primarily Turkish, spanning 40+ additional languages — to support tokenizer research and model training. Developing RAG-based precedent decision-query modules by experimenting with vector search and optimal chunking strategies, and rigorously testing experimental AI features on their way to production.",
                    tech: ["RAG", "Vector Search", "Chunking Strategies", "Tokenizer Research", "Multilingual Datasets", "Model Training"],
                },
                {
                    period: "Jul 2026 — Aug 2026",
                    title: "AI-Native Summer Intern",
                    company: "OBSS Teknoloji",
                    href: "https://obss.tech/en/",
                    description:
                        "Trained in AI-Native software engineering (spec-driven development, ATDD/TDD, AI orchestration), then built a full-stack mock interview platform in a small team using LLM APIs for adaptive question generation and candidate evaluation reports. Practiced Controlled Autonomy: authored specs, architecture decisions, and AI usage logs as quality gates, taking full ownership of every AI-assisted output before delivery.",
                    tech: ["Spec-Driven Development", "ATDD/TDD", "AI Orchestration", "LLM APIs", "MCP", "Full Stack"],
                },
                {
                    company: "ArcMotus · SERG (Yeditepe University)",
                    href: "https://www.arcmotus.com/",
                    roles: [
                        {
                            period: "May 2026 — Aug 2026",
                            title: "Founding Team Member · ArcMotus",
                            description:
                                "Together with our team and our advisor Prof. Dr. Mert Özkaya, we turned our SERG research into ArcMotus — a company building solutions that cut the time wasted on parking in big cities like Istanbul. Took ParkWiser, our first product, from a research prototype to a marketable AI-powered smart parking platform.",
                            tech: ["Java", "Spring Boot", "Python", "AI Chatbot", "IoT", "Microservices"],
                        },
                        {
                            period: "May 2025 — May 2026",
                            title: "Undergraduate Research Assistant · SERG",
                            description:
                                "Contributed to the Smart Parking Management System, a large-scale project with a cross-functional team of 20+ members, including a professor and alumni — from requirements gathering to backend development with Java Spring Boot and PostgreSQL, IoT device integration, and the transition to a microservice architecture.",
                            tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Requirements Engineering"],
                        },
                    ],
                },
                {
                    period: "Sep 2024 — Oct 2024",
                    title: "Software Engineer Intern (Volunteer)",
                    company: "Game Actor",
                    href: "https://www.game.actor/",
                    description:
                        "Developed responsive and modern user interfaces leveraging React and component-based architecture to ensure modularity, high performance, and code reusability across web applications.",
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
            form: {
                subject: "Subject",
                subjectPlaceholder: "What is this about?",
                email: "Your Email",
                emailPlaceholder: "your@email.com",
                message: "Message",
                messagePlaceholder: "Your message...",
                send: "Send Message",
                sending: "Sending...",
                successTitle: "Message received!",
                successSub: "I'll get back to you as soon as possible.",
                errorText: "Something went wrong. Please try again.",
                divider: "or send a message",
            },
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
                "Magibu AI'da uzun dönem stajyer olarak AI Araştırmacısı & Veri Mühendisiyim, Yeditepe Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. RAG sistemleri, çok dilli veri setleri ve Java Spring Boot ile Python tabanlı ölçeklenebilir backend'ler geliştiriyorum.",
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
                        { t: "Şu anda ", style: "muted" },
                        { t: "Magibu AI'da uzun dönem stajyer", style: "gold" },
                        { t: " olarak tokenizer araştırmaları için çok dilli veri setleri ve RAG tabanlı arama sistemleri üzerinde çalışıyorum. Öncesinde ", style: "muted" },
                        { t: "OBSS'teki AI-Native Yaz Stajımı", style: "accent" },
                        { t: " tamamladım; SERG'de bir yılı aşkın süre çalıştım ve 20+ kişilik ekiple yürüttüğümüz akıllı otopark araştırmamız, danışman hocamızla kurduğumuz ", style: "muted" },
                        { t: "ArcMotus", style: "accent" },
                        { t: " şirketine dönüştü.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Backend mühendisliği ile yapay zekanın kesiştiği yerde çalışmayı seviyorum: ", style: "muted" },
                        { t: "Java Spring Boot", style: "accent" },
                        { t: " ve ", style: "muted" },
                        { t: "Python", style: "accent" },
                        { t: " ile ölçeklenebilir servisler, RAG pipeline'ları, fine-tuning ve multi-agent LLM sistemleri — her zaman temiz ve sürdürülebilir kodla.", style: "muted" },
                    ],
                },
                {
                    parts: [
                        { t: "Mühendislik dışında ", style: "muted" },
                        { t: "IEEE Yeditepe'de Sponsorluk Koordinatörü", style: "accent" },
                        { t: " (2025–2026) olarak öğrenci kolunun projeleri için kurumsal sponsorluklar sağladım.", style: "muted" },
                    ],
                },
            ],
            techStack: "Teknoloji Yığını",
            stats: [
                { value: "4.", label: "Yeditepe'de Yıl" },
                { value: "6+", label: "Proje" },
                { value: "Tam", label: "Burs" },
                { value: "3", label: "Staj" },
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
                    period: "Ağu 2026 — Günümüz",
                    title: "AI Araştırmacısı & Veri Mühendisi · Uzun Dönem Stajyer",
                    company: "Magibu AI",
                    href: "https://magibu.ai/",
                    description:
                        "Tokenizer araştırmaları ve model eğitimini desteklemek için başta Türkçe olmak üzere 40+ dili kapsayan çok dilli veri setlerini topluyor, temizliyor ve düzenliyorum. Vektör arama ve optimal chunking stratejileri üzerinde deneyler yaparak RAG tabanlı emsal karar sorgulama modülleri geliştiriyor, deneysel AI özelliklerini kapsamlı testlerle production'a hazırlıyorum.",
                    tech: ["RAG", "Vektör Arama", "Chunking Stratejileri", "Tokenizer Araştırması", "Çok Dilli Veri Setleri", "Model Eğitimi"],
                },
                {
                    period: "Tem 2026 — Ağu 2026",
                    title: "AI-Native Yaz Stajyeri",
                    company: "OBSS Teknoloji",
                    href: "https://obss.tech/en/",
                    description:
                        "AI-Native yazılım mühendisliği (spec-driven development, ATDD/TDD, AI orkestrasyonu) eğitimi aldıktan sonra küçük bir ekiple, LLM API'leri ile uyarlanabilir soru üretimi ve aday değerlendirme raporları sunan full-stack bir mülakat simülasyonu platformu geliştirdim. Kontrollü Otonomi yaklaşımıyla spec'leri, mimari kararları ve AI kullanım kayıtlarını kalite kapıları olarak yazdım; AI destekli her çıktının teknik sorumluluğunu teslimden önce üstlendim.",
                    tech: ["Spec-Driven Development", "ATDD/TDD", "AI Orkestrasyonu", "LLM API'leri", "MCP", "Full Stack"],
                },
                {
                    company: "ArcMotus · SERG (Yeditepe Üniversitesi)",
                    href: "https://www.arcmotus.com/",
                    roles: [
                        {
                            period: "May 2026 — Ağu 2026",
                            title: "Kurucu Ekip Üyesi · ArcMotus",
                            description:
                                "Ekibimiz ve danışman hocamız Prof. Dr. Mert Özkaya ile SERG'deki araştırmamızı, İstanbul gibi büyük şehirlerde park etmek için harcanan zamanı azaltan çözümler geliştiren ArcMotus şirketine dönüştürdük. İlk ürünümüz ParkWiser'ı bir araştırma prototipinden pazarlanabilir, yapay zeka destekli bir akıllı otopark platformuna taşıdık.",
                            tech: ["Java", "Spring Boot", "Python", "AI Chatbot", "IoT", "Mikroservisler"],
                        },
                        {
                            period: "May 2025 — May 2026",
                            title: "Lisans Araştırma Asistanı · SERG",
                            description:
                                "Bir profesör ve mezunların da yer aldığı 20+ kişilik çapraz fonksiyonlu ekiple yürütülen Smart Parking Management System projesinde; gereksinim toplamadan Java Spring Boot ve PostgreSQL ile backend geliştirmeye, IoT cihaz entegrasyonundan mikroservis mimarisine geçişe kadar her aşamada yer aldım.",
                            tech: ["Java", "Spring Boot", "PostgreSQL", "Mikroservisler", "Gereksinim Mühendisliği"],
                        },
                    ],
                },
                {
                    period: "Eyl 2024 — Eki 2024",
                    title: "Yazılım Mühendisi Stajyeri (Gönüllü)",
                    company: "Game Actor",
                    href: "https://www.game.actor/",
                    description:
                        "React ve bileşen tabanlı mimari kullanarak web uygulamalarında modern, duyarlı kullanıcı arayüzleri geliştirdim. Modülerlik, yüksek performans ve kod yeniden kullanılabilirliğini ön planda tuttum.",
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
            form: {
                subject: "Konu",
                subjectPlaceholder: "Konu nedir?",
                email: "Mail Adresi",
                emailPlaceholder: "mail@adresin.com",
                message: "Mesaj",
                messagePlaceholder: "Mesajınız...",
                send: "Gönder",
                sending: "Gönderiliyor...",
                successTitle: "Mesajın alındı!",
                successSub: "En kısa sürede yanıt vereceğim.",
                errorText: "Bir şeyler ters gitti. Lütfen tekrar dene.",
                divider: "ya da mesaj bırak",
            },
        },

        footer: {
            builtBy: "Tasarım & Geliştirme: Ahmet Ege",
        },
    },
};
