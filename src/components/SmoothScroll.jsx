"use client";
/*
  components/SmoothScroll.jsx — Lenis smooth scroll wrapper

  Desktop'ta Instagram/reasonal.co tarzı inertia scrolling sağlar.
  data-lenis-stop attribute'u eklendiğinde (örn. modal açıkken) Lenis pause yapılır.
*/

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        let lenis;
        let rafId;

        import("lenis").then(({ default: Lenis }) => {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                touchMultiplier: 1.5,
            });

            lenisRef.current = lenis;

            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);

            /* data-lenis-stop attribute'unu dinle — modal gibi overlay'ler için */
            const observer = new MutationObserver(() => {
                const shouldStop = document.documentElement.hasAttribute("data-lenis-stop");
                if (shouldStop) {
                    lenis.stop();
                } else {
                    lenis.start();
                }
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["data-lenis-stop"],
            });

            // Observer'ı cleanup'a ekle
            lenisRef._observer = observer;
        });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (lenis) lenis.destroy();
            if (lenisRef._observer) lenisRef._observer.disconnect();
        };
    }, []);

    return children;
}
