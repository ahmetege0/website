/*
  lib/projects.js — Güncellendi
  
  Değişiklikler:
  - ParkWiser: externalUrl kaldırıldı (View Project butonu çıkıyor)
  - AI Driver Guidance: status "In Progress" yapıldı
*/

export const projects = [
  {
    slug: "parkwiser",
    title: "ParkWiser",
    subtitle: "Smart Parking Management System",
    shortDescription:
      "Large-scale microservice backend system for intelligent parking space management with AI-driven automation.",
    longDescription:
      "Developed backend services using Java Spring Boot following layered architecture patterns to ensure separation of concerns and maintainability. Integrated Python-based AI modules for automated system management. Collaborated on the full software development lifecycle, contributing to the transition and management of a Microservices Architecture, focusing on system architecture and scalability within the AI and Backend teams. Part of a cross-functional team of 20+ members at SERG, Yeditepe University.",
    role: "Jr. Backend & AI Developer",
    period: "May 2025 – Feb 2026",
    tech: ["Java", "Spring Boot", "Python", "Microservices", "PostgreSQL", "AI/ML"],
    githubUrl: "https://github.com/ahmetege0",
    liveUrl: null,
    videoUrl: "https://youtu.be/n9Dwj1nVM-E?si=crIgcT6yLSRUOBN6",
    externalUrl: null, // View Project butonu kaldırıldı (SERG linki değil, doğrudan modal'dan erişilebilir)
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
    longDescription:
      "Designing a microservices architecture using Java Spring Boot and Python to build a RAG-based AI assistant and vector-search powered community platform. Provides real-time crisis management and personalized support for parents of individuals with autism. The system leverages modern AI techniques including Retrieval-Augmented Generation (RAG) and vector databases for semantic search.",
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
    longDescription:
      "Designing a hybrid software architecture integrating Layered, Microservices, and Event-Driven patterns to enhance system modularity and fault tolerance. Defining data strategies using C4 modeling for distinct system layers while facilitating asynchronous communication for real-time charging station and traffic data.",
    role: "Jr. Architecture Designer",
    period: "June 2025 – Present",
    tech: ["Architecture Design", "C4 Modeling", "Microservices", "Event-Driven", "System Design"],
    githubUrl: null,
    liveUrl: null,
    videoUrl: null,
    externalUrl: "https://sites.google.com/view/yeditepeserg/home",
    featured: false,
    status: "In Progress", // Kullanıcı isteği: In Progress yapıldı
    coverColor: "#2481A6",
  },
  {
    slug: "pang-game",
    title: "Pang Arcade Game",
    subtitle: "Java OOP School Project",
    shortDescription:
      "Classic Pang arcade game implemented in Java with OOP principles, multi-level logic, and event-driven architecture.",
    longDescription:
      "Developed a local version of the classic Pang arcade game using Java, applying core OOP principles like inheritance and polymorphism for dynamic entity management. Engineered game logic and event-handling for multi-level environments using standard Java graphical libraries.",
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
