"use client";
/*
  SmoothScroll.jsx — Lenis smooth scroll wrapper
  GSAP ScrollTrigger ile senkronize: lenis.on('scroll', ScrollTrigger.update)
  scrollerProxy KULLANILMIYOR — timing race condition ve flash yaratıyordu.
*/

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        let lenis;
        let rafId;

        Promise.all([
            import("lenis"),
            import("gsap").then(({ gsap }) => gsap),
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger),
        ]).then(([{ default: Lenis }, gsap, ScrollTrigger]) => {
            gsap.registerPlugin(ScrollTrigger);

            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                touchMultiplier: 1.5,
            });

            lenisRef.current = lenis;

            // Lenis scroll → GSAP ScrollTrigger güncelle (scrollerProxy olmadan)
            lenis.on("scroll", ScrollTrigger.update);

            lenisRef._update = (time) => {
                lenis.raf(time * 1000);
            };

            gsap.ticker.add(lenisRef._update);
            gsap.ticker.lagSmoothing(0);

            /* data-lenis-stop attribute'unu dinle */
            const observer = new MutationObserver(() => {
                const shouldStop = document.documentElement.hasAttribute("data-lenis-stop");
                if (shouldStop) lenis.stop();
                else lenis.start();
            });
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["data-lenis-stop"],
            });
            lenisRef._observer = observer;
        });

        return () => {
            if (lenisRef.current && lenisRef._update) gsap.ticker.remove(lenisRef._update);
            if (lenis) lenis.destroy();
            if (lenisRef._observer) lenisRef._observer.disconnect();
        };
    }, []);

    return children;
}
