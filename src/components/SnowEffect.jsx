"use client";
/*
  components/SnowEffect.jsx — Canvas tabanlı kar animasyonu

  Çalışma prensibi:
  1. window boyutuna tam oturan şeffaf <canvas> tüm sayfanın üstüne fixed olarak yerleştirilir
  2. pointer-events: none → kar tıklamaları bloklamaz, alttaki site kullanılabilir
  3. Her frame'de (requestAnimationFrame ile ~60fps):
     - ctx.clearRect ile önceki frame silinir
     - Her Snowflake'in y konumu speed kadar artırılır (aşağı düşme)
     - x konumu wind kadar kayar (hafif yana doğru)
     - Ekrandan çıkınca resetlenir (tepeden yeniden başlar)
  4. Kapatıldığında animasyon loop'u iptal edilir, canvas temizlenir
*/

import { useEffect, useRef } from "react";

/* ————————————————————————————————————————————
   Snowflake sınıfı
   Her kar tanesi kendi özelliklerini (konum, hız, boyut, opaklık, sallanma) taşır.
   ———————————————————————————————————————————— */
class Snowflake {
    constructor(canvas) {
        this.reset(canvas, true);
    }

    /* 
      reset: Karı başlangıç konumuna döndürür.
      initialSpawn=true ise y pozisyonu rastgele (sayfa başında dolu görünmesi için),
      sonraki spawn'larda tepeden (-10) başlar.
    */
    reset(canvas, initialSpawn = false) {
        this.x = Math.random() * canvas.width;
        this.y = initialSpawn ? Math.random() * canvas.height : -10;
        this.size = Math.random() * 4 + 2;           // 2–6 px yarıçap
        this.speed = Math.random() * 1.2 + 0.4;       // 0.4–1.6 px/frame düşme hızı
        this.wind = (Math.random() - 0.5) * 0.6;     // -0.3 → +0.3 yana kayma
        this.opacity = Math.random() * 0.6 + 0.25;    // 0.25–0.85 opaklık
        this.wobble = Math.random() * Math.PI * 2;  // dallanma faz başlangıcı
        this.wobbleSpeed = Math.random() * 0.03 + 0.01; // ne kadar hızlı sallanır
    }

    update(canvas) {
        this.y += this.speed;
        this.wobble += this.wobbleSpeed;
        this.x += this.wind + Math.sin(this.wobble) * 0.4; // hafif sinüs sallanması

        /* Ekrandan çıkınca sıfırla */
        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
            this.reset(canvas, false);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        /* Beyazın üstüne hafif mavimsi ton → daha gerçekçi görünüm */
        ctx.fillStyle = `rgba(200, 225, 255, ${this.opacity})`;
        ctx.fill();
    }
}

/* ————————————————————————————————————————————
   SnowEffect bileşeni
   active prop'u ile açılıp kapanır.
   ———————————————————————————————————————————— */
export default function SnowEffect({ active }) {
    const canvasRef = useRef(null);
    const flakesRef = useRef([]);
    const animFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        /* Kapalıysa: animation loop'u durdur ve canvas'ı temizle */
        if (!active) {
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
                animFrameRef.current = null;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            flakesRef.current = [];
            return;
        }

        /* Canvas'ı pencere boyutuna eşitle */
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize, { passive: true });

        /* 150 kar tanesi oluştur (ilk spawn'da y rastgele → anında dolu görünür) */
        flakesRef.current = Array.from({ length: 150 }, () => new Snowflake(canvas));

        /* Animation loop */
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            flakesRef.current.forEach((flake) => {
                flake.update(canvas);
                flake.draw(ctx);
            });
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none", /* ← kullanıcı etkileşimini engellemiyor */
                zIndex: 9998,
                display: active ? "block" : "none",
            }}
        />
    );
}
