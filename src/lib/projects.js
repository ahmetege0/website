/*
  lib/projects.js — Tüm projeler + Türkçe açıklamalar

  Her proje için:
  - shortDescriptionTr: Kart üzerindeki kısa açıklama (Türkçe)
  - longDescriptionTr:  Modal içindeki uzun açıklama (Türkçe)
*/

export const projects = [
  {
    slug: "parkwiser",
    title: "ParkWiser",
    subtitle: "Smart Parking Management System",

    shortDescription:
      "Large-scale microservice backend for intelligent parking space management with AI-driven automation.",
    shortDescriptionTr:
      "Yapay zeka destekli otomasyon ile akıllı otopark yönetimi için büyük ölçekli mikroservis backend sistemi.",

    longDescription:
      "Developed backend services using Java Spring Boot following layered architecture patterns to ensure separation of concerns and maintainability. Integrated Python-based AI modules for automated system management. Collaborated on the full software development lifecycle, contributing to the transition and management of a Microservices Architecture, focusing on system architecture and scalability within the AI and Backend teams. Part of a cross-functional team of 20+ members at SERG, Yeditepe University.",
    longDescriptionTr:
      "Kod ayrımı ve sürdürülebilirliği sağlamak amacıyla Java Spring Boot kullanarak katmanlı mimari prensiplerine uygun backend servisler geliştirdim. Otomatik sistem yönetimi için Python tabanlı yapay zeka modülleri entegre ettim. Yazılım geliştirme sürecinin tüm aşamalarına katkı sağladım; AI ve Backend ekipleri bünyesinde sistem mimarisi ve ölçeklenebilirliğe odaklanarak Mikroservis Mimarisi'ne geçiş sürecini destekledim. SERG, Yeditepe Üniversitesi bünyesindeki 20'den fazla kişilik çapraz fonksiyonlu ekibin bir parçasıyım.",

    role: "Jr. Backend & AI Developer",
    period: "May 2025 – Feb 2026",
    tech: ["Java", "Spring Boot", "Python", "Microservices", "PostgreSQL", "AI/ML"],
    githubUrl: "https://github.com/ahmetege0",
    liveUrl: null,
    videoUrl: "https://youtu.be/n9Dwj1nVM-E?si=crIgcT6yLSRUOBN6",
    externalUrl: null,
    featured: true,
    status: "Completed",
    coverColor: "#02735E",
  },
  {
    slug: "autism-support",
    title: "AI Autism Support Assistant",
    subtitle: "RAG-Based AI Community Platform",

    shortDescription:
      "Microservices platform with a RAG-based AI assistant and vector-search community for autism support.",
    shortDescriptionTr:
      "Otizm desteğine yönelik RAG tabanlı yapay zeka asistanı ve vektör arama destekli topluluk platformu.",

    longDescription:
      "Designing a microservices architecture using Java Spring Boot and Python to build a RAG-based AI assistant and vector-search powered community platform. Provides real-time crisis management and personalized support for parents of individuals with autism. The system leverages modern AI techniques including Retrieval-Augmented Generation (RAG) and vector databases for semantic search.",
    longDescriptionTr:
      "Java Spring Boot ve Python kullanan bir mikroservis mimarisi tasarlıyorum; bu mimari RAG tabanlı bir yapay zeka asistanı ve vektör arama destekli bir topluluk platformundan oluşuyor. Sistem, otizmli bireylerin ebeveynlerine gerçek zamanlı kriz yönetimi ve kişiselleştirilmiş destek sunuyor. Anlamsal arama için Retrieval-Augmented Generation (RAG) ve vektör veritabanları gibi modern yapay zeka teknolojilerinden yararlanıyor.",

    role: "Full Stack Developer",
    period: "Feb 2026 – Present",
    tech: ["Java", "Spring Boot", "Python", "RAG", "Vector Search", "Microservices", "AI/ML"],
    githubUrl: null,
    liveUrl: null,
    videoUrl: null,
    externalUrl: null,
    featured: true,
    status: "In Progress",
    coverColor: "#034C8C",
  },
  {
    slug: "driver-guidance",
    title: "AI Driver Guidance System",
    subtitle: "Hybrid Architecture Design",

    shortDescription:
      "Hybrid architecture design integrating Layered, Microservices, and Event-Driven patterns for smart charging stations.",
    shortDescriptionTr:
      "Akıllı şarj istasyonları için Katmanlı, Mikroservis ve Olay Tabanlı mimarilerini birleştiren hibrit mimari tasarımı.",

    longDescription:
      "Designing a hybrid software architecture integrating Layered, Microservices, and Event-Driven patterns to enhance system modularity and fault tolerance. Defining data strategies using C4 modeling for distinct system layers while facilitating asynchronous communication for real-time charging station and traffic data.",
    longDescriptionTr:
      "Sistem modülerliğini ve hata toleransını artırmak amacıyla Katmanlı, Mikroservis ve Olay Tabanlı mimari desenlerini entegre eden hibrit bir yazılım mimarisi tasarlıyorum. Birbirinden bağımsız sistem katmanları için C4 modelleme ile veri stratejileri tanımlarken, gerçek zamanlı şarj istasyonu ve trafik verileri için asenkron iletişim mekanizmaları yapılandırıyorum.",

    role: "Jr. Architecture Designer",
    period: "June 2025 – Present",
    tech: ["Architecture Design", "C4 Modeling", "Microservices", "Event-Driven", "System Design"],
    githubUrl: null,
    liveUrl: null,
    videoUrl: null,
    externalUrl: "https://sites.google.com/view/yeditepeserg/home",
    featured: false,
    status: "In Progress",
    coverColor: "#2481A6",
  },
  {
    slug: "pang-game",
    title: "Pang Arcade Game",
    subtitle: "Java OOP School Project",

    shortDescription:
      "Classic Pang arcade game in Java with OOP principles, multi-level logic, and event-driven architecture.",
    shortDescriptionTr:
      "Java ile OOP ilkeleri (kalıtım, polimorfizm) kullanılarak geliştirilmiş klasik Pang arcade oyunu.",

    longDescription:
      "Developed a local version of the classic Pang arcade game using Java, applying core OOP principles like inheritance and polymorphism for dynamic entity management. Engineered game logic and event-handling for multi-level environments using standard Java graphical libraries.",
    longDescriptionTr:
      "Java kullanarak klasik Pang arcade oyununun yerel bir versiyonunu geliştirdim; dinamik nesne yönetimi için kalıtım ve polimorfizm gibi temel OOP prensiplerine başvurdum. Standart Java grafik kütüphaneleriyle çok seviyeli oyun ortamları için oyun mantığı ve olay işleme mekanizmaları tasarladım.",

    role: "Java OOP Developer",
    period: "May 2025 – June 2025",
    tech: ["Java", "OOP", "Swing/AWT", "Game Development"],
    githubUrl: "https://github.com/ahmetege0",
    liveUrl: null,
    videoUrl: null,
    externalUrl: null,
    featured: false,
    status: "Completed",
    coverColor: "#025951",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
