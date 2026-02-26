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
      "Our smart parking management system was developed using AI-powered, microservice, and layered architecture.",
    shortDescriptionTr:
      "Yapay zeka destekli, Microservice ve Katmanlı mimari kullanarak geliştirdiğimiz akıllı otopark yönetim sistemi.",

    longDescription:
      "As a result of approximately a year-long work within SERG, from the **Requirements Gathering** phase to project completion, I actively took part in every step of the journey from inception to a marketable product — contributing to AI chatbot assistant development, **IoT device integration**, backend development with **Java Spring Boot**, database management with **PostgreSQL**, and developing reservation and sensor-based parking process pages in TypeScript for both the Driver and Provider apps.\n\nWorking with a team of 20+ people — comprised of graduates and the brightest students from every year at our university — holds a unique place in my growth, both in terms of interpersonal communication and the experience of collaborating as part of a team.\n\nUnder **ArcMotus**, founded by our team and our advisor **Prof. Dr. Mert Özkaya**, we are building solutions that eliminate the time wasted during parking — at least partially addressing the incredibly difficult traffic problem in major cities like Istanbul. With ParkWiser, our first product, you can identify your destination with our AI assistant, find the nearest parking lots, and make a reservation without ever leaving the chatbot screen! For more details, feel free to watch our demo video or reach me via email!",
    longDescriptionTr:
      "SERG bünyesinde yaklaşık 1 yılı bulan bir çalışmanın sonucunda, **Requirements Gathering** adımından projenin tamamlanmasına kadar; AI chatbot assistant geliştirme, **IoT device entegrasyonu**, **Java Spring Boot** ile backend geliştirme, **PostgreSQL** ile database yönetimi ve son olarak da Driver ve Provider uygulamalarımızda TypeScript ile rezervasyon ve sensörlü park süreçlerinin sayfalarını geliştirme ekiplerinde yer alarak projenin başlangıcından, pazarlanabilir bir ürün haline gelişine kadar her adımında aktif rol aldım.\n\nMezunlar ve üniversitemizdeki her dönemden en parlak öğrencilerin toplandığı 20+ kişilik bir ekiple çalışmak, hem ekip içi iletişim becerilerimi hem de bir takımın parçası olarak çalışma deneyimi konusunda benim için benzersiz bir yere sahip.\n\nEkibimiz ve danışman hocamız sayın **Prof. Dr. Mert Özkaya**'nın kurduğu **ArcMotus** bünyesinde, İstanbul gibi büyük şehirlerde yaşanan ve çözümü çok zor olan trafik problemine en azından parklanma sürecinde harcanan zamanı yok eden çözümler geliştiriyoruz. Bunlardan ilki olan ParkWiser ile gitmek istediğiniz yerleri AI asistanımız ile tespit edebilir, en yakın otoparkları bulabilir ve dilediğinize chatbot ekranından çıkmadan rezervasyon yapabilirsiniz! Daha detaylı bilgi için videomuzu izleyebilir ya da bana mail adresim üzerinden ulaşabilirsiniz!",

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
    title: "AURA",
    subtitle: "Autism Understanding & Response Assistant",

    shortDescription:
      "AURA (Autism Understanding & Response Assistant) — a social responsibility project developing modern AI-powered solutions for individuals with autism.",
    shortDescriptionTr:
      "AURA (Autism Understanding & Response Assistant) isimli sosyal sorumluluk projemizde, otizmli bireylere yönelik modern AI destekli çözümler geliştiriyoruz.",

    longDescription:
      "In **AURA (Autism Understanding & Response Assistant)**, I lead a team I founded myself, building a product for a critically underserved market — both in Turkey and globally. **86%** of families raising an individual on the autism spectrum say \"I don't know what to do in a crisis moment,\" and there are over **600,000 individuals on the autism spectrum** in Turkey alone.\n\nAlongside academics and special education students from Yeditepe University, we are building a **RAG-based AI chatbot**. Our collaboration with expert faculty who guide us on delivering the right crisis-moment support continuously improves our product's consistency. The **Java Spring Boot & Python** backend and AI architecture is developed by the software team I assembled myself. To address the loneliness problem families face, we use **vector-based matching** to connect families with similar experiences — bringing modern AI solutions to a deeply human, social challenge.\n\nWorking on a social responsibility project that supports individuals with autism both fulfills a sense of duty to my country and adds another meaningful chapter to my AI development journey.",
    longDescriptionTr:
      "**AURA (Autism Understanding & Response Assistant)** isimli projemizde, kendi kurduğum bir ekibe liderlik ederek ülkemizde ve dünya çapında eksikliği hissedilen ciddi bir pazara ürün geliştiriyoruz. Otizm spektrumunda bulunan bir bireye ebeveynlik yapan ailelerin **%86'sı** \"kriz anlarında ne yapacağımı bilmiyorum\" diyor ve ülkemizde **600 binden fazla** otizm spektrumunda birey bulunmakta.\n\nEkibimizde bulunan Yeditepe Üniversitesi'nden akademisyenler ve özel eğitim öğrencileri ile birlikte, **RAG temelli bir AI chatbot** geliştiriyoruz. Kriz anında vereceğimiz desteği en doğru şekilde bize aktaran akademisyen hocalarımızla sürdürdüğümüz çalışmalar, ürünümüzün tutarlılık seviyesini artırıyor. **Java Spring Boot ve Python** temelli backend ve AI mimarisini de kendi kurduğum yazılımcı ekibimizle geliştiriyoruz. Benzer sorunları yaşayan ailelerin yalnızlık sorunlarını gidermek adına **vektör tabanlı eşleştirme** ile ailelerin birbirlerini bulmalarını sağlayarak sosyal sorunlara modern yapay zeka çözümleri getiriyoruz.\n\nOtizmli bireylere destek olacak bir sosyal sorumluluk projesinde çalışmak hem ülkeme olan borcumu ödemiş hissettiriyor, hem de AI geliştirme deneyimime bir yenisini daha ekliyor.",

    role: "Founder & Full Stack Developer",
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
      "Localized Java re-make of the classic Pang arcade game, featuring Turkish cities as level backgrounds and OOP patterns.",
    shortDescriptionTr:
      "Türk şehirlerini arka plan olarak kullanan, OOP prensipleriyle yazılmış klasik Pang arcade oyununun Java ile yeniden yorumu.",

    longDescription:
      "Developed as a school project at Yeditepe University, this modernized localization of the classic Pang arcade game brings the 'bubble-popping' mechanic to iconic Turkish cities — **Istanbul, Ankara, Antalya, Adana, and Göbeklitepe** — each with unique level backgrounds.\n\nThe project showcases **Object-Oriented Programming (OOP)** excellence in Java: **Inheritance & Polymorphism** for dynamic entity management across game objects (Bubbles, Bullets, Player), **Encapsulation** via GamePanel and Player classes, custom **collision detection** logic between projectiles and bubbles of varying sizes, and file I/O for saving user credentials and session histories.\n\nFeatures include multi-level support with increasing difficulty, a login/registration system, custom sound effects (pop.wav, music.wav), and a local score & history tracking system.",
    longDescriptionTr:
      "Yeditepe Üniversitesi'nde geliştirilmiş bu okul projesi, klasik Pang arcade oyununun modernize edilmiş ve yerelleştirilmiş versiyonudur. 'Balon patlatma' mekaniğini **İstanbul, Ankara, Antalya, Adana ve Göbeklitepe** gibi ikonik Türk şehirlerine özgü arka planlarla sunuyor.\n\nProje, Java'da **Nesne Yönelimli Programlama (OOP)** mükemmeliyetini sergiliyor: Oyun nesneleri (Balonlar, Mermiler, Oyuncu) arasında dinamik yönetim için **Kalıtım & Polimorfizm**, GamePanel ve Player sınıfları üzerinden **Kapsülleme**, farklı boyutlardaki balonlar ile mermiler arasında özel **çarpışma algılama** mantığı ve kullanıcı bilgileri ile oyun geçmişlerini kaydetmek için dosya G/Ç işlemleri.\n\nÖzellikler: artan zorlukla çok seviyeli yapı, kullanıcı giriş/kayıt sistemi, özel ses efektleri (pop.wav, music.wav) ve yerel skor & geçmiş takip sistemi.",

    images: [
      "/images/pang/pang1.png",
      "/images/pang/pang2.png",
      "/images/pang/pang3.png",
    ],

    role: "Java OOP Developer",
    period: "May 2025 – June 2025",
    tech: ["Java", "OOP", "Swing/AWT", "Game Development", "File I/O"],
    githubUrl: "https://github.com/ahmetege0/pang-arcade-game",
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
