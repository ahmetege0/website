"use client";
/*
  lib/ThemeContext.jsx — Global tema yönetimi

  - Default: Cihazın prefers-color-scheme ayarı
  - localStorage ile kalıcılık
  - <html> elemanına data-theme="dark"|"light" ekler
*/

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Önce localStorage kontrol et
        const saved = localStorage.getItem("portfolio-theme");
        if (saved === "dark" || saved === "light") {
            setTheme(saved);
        } else {
            // Cihaz tercihini al
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
        setMounted(true);
    }, []);

    // Tema değiştiğinde <html> elemanına data-theme ekle
    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        // Geçiş animasyonu class'ını ekle
        document.documentElement.classList.add("theme-transitioning");
        setTheme(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        // 400ms sonra animasyon class'ını kaldır
        setTimeout(() => {
            document.documentElement.classList.remove("theme-transitioning");
        }, 400);
    };

    // SSR sırasında hydration mismatch'i önle
    // Henüz mount olmadıysa dark varsay (flash önleme)
    return (
        <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
