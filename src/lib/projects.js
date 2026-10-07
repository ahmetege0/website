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
      "As a result of approximately a year-long work within SERG, from the **Requirements Gathering** phase to project completion, I actively took part in every step of the journey from inception to a marketable product — contributing to AI chatbot assistant development, **IoT device integration**, backend development with **Java Spring Boot**, database management with **PostgreSQL**, and developing reservation and sensor-based parking process pages in TypeScript for both the Driver and Provider apps.\n\nWorking with a team of 20+ people — comprised of graduates and the brightest students from every year at our university — holds a unique place in my growth, both in terms of interpersonal communication and the experience of collaborating as part of a team.\n\nUnder **ArcMotus**, founded by our team and our advisor **Prof. Dr. Mert Özkaya**, we built solutions that eliminate the time wasted during parking — at least partially addressing the incredibly difficult traffic problem in major cities like Istanbul. With ParkWiser, our first product, you can identify your destination with our AI assistant, find the nearest parking lots, and make a reservation without ever leaving the chatbot screen! For more details, feel free to watch our demo videos or reach me via email!",
    longDescriptionTr:
      "SERG bünyesinde yaklaşık 1 yılı bulan bir çalışmanın sonucunda, **Requirements Gathering** adımından projenin tamamlanmasına kadar; AI chatbot assistant geliştirme, **IoT device entegrasyonu**, **Java Spring Boot** ile backend geliştirme, **PostgreSQL** ile database yönetimi ve son olarak da Driver ve Provider uygulamalarımızda TypeScript ile rezervasyon ve sensörlü park süreçlerinin sayfalarını geliştirme ekiplerinde yer alarak projenin başlangıcından, pazarlanabilir bir ürün haline gelişine kadar her adımında aktif rol aldım.\n\nMezunlar ve üniversitemizdeki her dönemden en parlak öğrencilerin toplandığı 20+ kişilik bir ekiple çalışmak, hem ekip içi iletişim becerilerimi hem de bir takımın parçası olarak çalışma deneyimi konusunda benim için benzersiz bir yere sahip.\n\nEkibimiz ve danışman hocamız sayın **Prof. Dr. Mert Özkaya**'nın kurduğu **ArcMotus** bünyesinde, İstanbul gibi büyük şehirlerde yaşanan ve çözümü çok zor olan trafik problemine en azından parklanma sürecinde harcanan zamanı yok eden çözümler geliştirdik. Bunlardan ilki olan ParkWiser ile gitmek istediğiniz yerleri AI asistanımız ile tespit edebilir, en yakın otoparkları bulabilir ve dilediğinize chatbot ekranından çıkmadan rezervasyon yapabilirsiniz! Daha detaylı bilgi için videolarımızı izleyebilir ya da bana mail adresim üzerinden ulaşabilirsiniz!",

    role: "Jr. Backend & AI Developer",
    period: "May 2025 – Aug 2026",
    tech: ["Java", "Spring Boot", "Python", "Microservices", "PostgreSQL", "AI/ML"],
    githubUrl: "https://github.com/ahmetege0",
    liveUrl: null,
    videos: [
      { url: "https://youtu.be/2mIS7PXS50w", title: "ParkWiser Demo" },
      { url: "https://youtu.be/mnJBTj-wX9Y", title: "ParkTwin — Digital Twin" },
    ],
    externalUrl: null,
    featured: true,
    status: "Completed",
    coverColor: "#02735E",
  },
  {
    slug: "mock-interview",
    title: "Mock Interview App",
    subtitle: "AI-Native Case Study — OBSS",

    shortDescription:
      "Full-stack mock interview platform that turns a pasted job posting into a role-specific interview via a multi-agent LLM pipeline.",
    shortDescriptionTr:
      "Yapıştırılan bir iş ilanından, multi-agent LLM pipeline ile role özel mülakat üreten full-stack mülakat simülasyonu platformu.",

    longDescription:
      "Built during my **AI-Native Summer Internship at OBSS** as a team case study. The application orchestrates a **multi-agent LLM pipeline via MCP**: paste a job posting, and it generates role-specific interview questions, guides the candidate through a sequential **Q&A flow**, and produces a structured post-interview **evaluation report**.\n\nOn the platform side, I implemented **email/password and Google OAuth authentication** with role-based admin access, plus an **admin dashboard** for interview history, token/cost tracking, profession filtering, and usage statistics.\n\nThe project was developed with AI-Native practices — spec-driven development, ATDD/TDD and Controlled Autonomy — where specs, architecture decisions and AI usage logs acted as quality gates for every AI-assisted output.",
    longDescriptionTr:
      "**OBSS'teki AI-Native Yaz Stajım** sırasında ekip olarak geliştirdiğimiz bir vaka çalışması. Uygulama, **MCP üzerinden multi-agent bir LLM pipeline'ı** yönetiyor: bir iş ilanını yapıştırıyorsunuz; sistem role özel mülakat soruları üretiyor, adayı sıralı bir **soru-cevap akışında** yönlendiriyor ve mülakat sonunda yapılandırılmış bir **değerlendirme raporu** hazırlıyor.\n\nPlatform tarafında rol tabanlı admin erişimiyle **e-posta/şifre ve Google OAuth kimlik doğrulamasını**, ayrıca mülakat geçmişi, token/maliyet takibi, meslek filtreleme ve kullanım istatistikleri sunan bir **admin paneli** geliştirdim.\n\nProje AI-Native pratiklerle — spec-driven development, ATDD/TDD ve Kontrollü Otonomi — geliştirildi; spec'ler, mimari kararlar ve AI kullanım kayıtları her AI destekli çıktı için kalite kapısı görevi gördü.",

    images: [
      "/images/mock_interview/setup.png",
      "/images/mock_interview/question.png",
      "/images/mock_interview/complete.png",
    ],

    role: "AI-Native Summer Intern",
    period: "Jul 2026 – Aug 2026",
    tech: ["LLM APIs", "Multi-Agent", "MCP", "Google OAuth", "Full Stack", "ATDD/TDD"],
    githubUrl: null,
    liveUrl: null,
    videos: [],
    externalUrl: null,
    featured: true,
    status: "Completed",
    coverColor: "#3E4C8C",
  },
  {
    slug: "stabiloreach",
    title: "Stabiloreach",
    subtitle: "Fall Risk Assessment SaaS for Physiotherapists",

    shortDescription:
      "Computer vision module that automates the clinical Forward Reach Test to assess fall risk in elderly patients, inside a SaaS platform for clinicians.",
    shortDescriptionTr:
      "Yaşlı hastalarda düşme riskini değerlendiren klinik Forward Reach Test'i otomatikleştiren bilgisayarlı görü modülü ve fizyoterapistlere yönelik SaaS platformu.",

    longDescription:
      "Stabiloreach helps physiotherapists assess **fall risk in elderly patients**. I developed the **Computer Vision** module in **Python** and **OpenCV** that automates the clinical **Forward Reach Test**: it detects body landmarks from video frames and computes reach distance using a height-based **pixel-to-centimeter calibration**.\n\nTo make the measurements clinically reliable, I calibrated the model against **physiotherapist-measured ground-truth videos**. I also contributed to the **SaaS web platform** built with a **Python FastAPI** backend and a **React** frontend, supporting clinician dashboards, video upload analysis, and remote consultation flows.",
    longDescriptionTr:
      "Stabiloreach, fizyoterapistlerin **yaşlı hastalarda düşme riskini** değerlendirmesine yardımcı oluyor. Klinik **Forward Reach Test**'i otomatikleştiren **Bilgisayarlı Görü** modülünü **Python** ve **OpenCV** ile geliştirdim: video karelerinden vücut landmark'larını tespit ediyor ve boy tabanlı **piksel-santimetre kalibrasyonu** ile uzanma mesafesini hesaplıyor.\n\nÖlçümlerin klinik olarak güvenilir olması için modeli **fizyoterapistlerin ölçtüğü referans (ground-truth) videolarla** kalibre ettim. Ayrıca **Python FastAPI** backend ve **React** frontend ile geliştirilen; klinisyen panelleri, video yükleme analizi ve uzaktan konsültasyon akışları sunan **SaaS web platformuna** katkıda bulundum.",

    role: "AI & Backend Developer",
    period: "Apr 2026 – Jul 2026",
    tech: ["Python", "OpenCV", "Computer Vision", "FastAPI", "React", "SaaS"],
    githubUrl: null,
    liveUrl: null,
    videos: [],
    externalUrl: null,
    featured: true,
    status: "Completed",
    coverColor: "#1F7A8C",
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
    period: "Feb 2026 – Jul 2026",
    tech: ["Java", "Spring Boot", "Python", "RAG", "Vector Search", "Microservices", "AI/ML"],
    githubUrl: null,
    liveUrl: null,
    videos: [],
    externalUrl: null,
    featured: true,
    status: "Completed",
    coverColor: "#034C8C",
  },
  {
    slug: "llm-fine-tuning",
    title: "Personal LLM Fine-Tuning",
    subtitle: "Qwen2.5-1.5B Clone Experiment",

    shortDescription:
      "Fine-tuned Qwen2.5-1.5B-Instruct on an anonymized personal chat dataset with Unsloth, quantized to GGUF for local inference.",
    shortDescriptionTr:
      "Anonimleştirilmiş kişisel sohbet verisiyle Unsloth kullanarak Qwen2.5-1.5B-Instruct fine-tune ettim; yerelde çalıştırmak için GGUF'a quantize ettim.",

    longDescription:
      "A personal experiment to see how well a small model can learn my own conversational style. I prepared a custom dataset from my personal chat history, applying **anonymization and preprocessing** to remove identifying information before formatting it into **instruction-tuning pairs**.\n\nI then fine-tuned **Qwen2.5-1.5B-Instruct** using **Unsloth** for accelerated training, and finally **quantized** and converted the result to **GGUF** format for local inference via **llama.cpp / Ollama**. The model is published on Hugging Face.",
    longDescriptionTr:
      "Küçük bir modelin benim konuşma tarzımı ne kadar iyi öğrenebileceğini görmek için yaptığım kişisel bir deney. Kişisel sohbet geçmişimden özel bir veri seti hazırladım; kimlik bilgilerini temizlemek için **anonimleştirme ve ön işleme** uyguladıktan sonra veriyi **instruction-tuning çiftlerine** dönüştürdüm.\n\nArdından **Unsloth** ile hızlandırılmış eğitim kullanarak **Qwen2.5-1.5B-Instruct** modelini fine-tune ettim ve sonucu **llama.cpp / Ollama** ile yerelde çalıştırmak için **quantize** edip **GGUF** formatına dönüştürdüm. Model Hugging Face'te yayında.",

    role: "ML Practitioner (Personal Project)",
    period: "Feb 2026",
    tech: ["Python", "Fine-Tuning", "Unsloth", "Qwen2.5", "GGUF", "Ollama"],
    githubUrl: null,
    liveUrl: null,
    videos: [],
    externalUrl: "https://huggingface.co/ahmetege/ahmetege-clone-v1-gguf",
    featured: false,
    status: "Completed",
    coverColor: "#6B3E8C",
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
    videos: [],
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
