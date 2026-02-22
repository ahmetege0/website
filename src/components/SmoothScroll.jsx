"use client";
/*
  components/SmoothScroll.jsx — Lenis smooth scroll wrapper

  Desktop'ta Instagram/reasonal.co tarzı inertia scrolling sağlar.
  Mobilde zaten tarayıcı bunu native olarak yapıyor.
  
  Lenis → lightweight, performant smooth scroll kütüphanesi.
*/

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Dinamik import — SSR'da window yok
        let lenis;
        let rafId;

        import("lenis").then(({ default: Lenis }) => {
            lenis = new Lenis({
                duration: 1.2,           // Scroll süresi (saniye)
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easeOut
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                touchMultiplier: 1.5,    // Mobil dokunma hassasiyeti
            });

            lenisRef.current = lenis;

            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
        });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (lenis) lenis.destroy();
        };
    }, []);

    return children;
}
