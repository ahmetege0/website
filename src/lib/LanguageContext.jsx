"use client";
/*
  lib/LanguageContext.jsx — Global dil yönetimi

  React Context Pattern:
  - LanguageContext: Verinin saklandığı kap
  - LanguageProvider: Context'i uygulamaya sağlayan sarmalayıcı
  - useLanguage: Herhangi bir bileşenden dile erişmek için hook

  localStorage ile kalıcılık:
  Sayfa yenilense bile seçilen dil hatırlanır.
*/

import { createContext, useContext, useState, useEffect } from "react";

/* Varsayılan değerlerle Context oluştur */
const LanguageContext = createContext({
    lang: "en",
    toggle: () => { },
});

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    /*
      Sayfa ilk yüklendiğinde localStorage'dan kaydedilmiş dili oku.
      SSR (Server-Side Rendering) sırasında localStorage yok,
      bu yüzden useEffect içinde (yani tarayıcıda) yapıyoruz.
    */
    useEffect(() => {
        const saved = localStorage.getItem("portfolio-lang");
        if (saved === "tr" || saved === "en") {
            setLang(saved);
        }
    }, []);

    const toggle = () => {
        const newLang = lang === "en" ? "tr" : "en";
        setLang(newLang);
        localStorage.setItem("portfolio-lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
}

/*
  useLanguage — Özel hook
  Herhangi bir 'use client' bileşeninde:
  const { lang, toggle } = useLanguage();
*/
export function useLanguage() {
    return useContext(LanguageContext);
}
