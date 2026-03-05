/*
  page.js — Ana sayfa
  SceneWrapper (R3F Canvas, fixed, z-index:-1) tüm sayfanın arkasında.
  Ön planda HTML section'ları (Hero, About, Experience, Projects, Contact).
*/

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import SceneWrapper from "@/components/3d/SceneWrapper";

export default function HomePage() {
  return (
    <>
      {/* Drei Html portal — z-index:100, pointer-events:none. İçindeki linkler auto olarak override edebilir */}
      <div
        id="three-html-portal"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100, pointerEvents: 'none', visibility: 'hidden' }}
      />

      {/* 3D Canvas — fixed, z-index: -1, tüm sayfanın arkasında */}
      <SceneWrapper />

      {/* HTML Overlay — scrollable foreground */}
      <Hero />

      {/* Anakart parçaları bu section'a scroll edilince yerine oturur (Faz 2) */}
      <About />
      <Experience />

      {/* Anakart kaybolur, laptop belirir (Faz 3) */}
      <Projects />

      {/* Kamera laptop ekranına zoom yapar (Faz 4) */}
      <Contact />
    </>
  );
}
