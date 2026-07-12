import { createContext, useContext, useEffect, useState } from "react";

import en from "../locales/en";
import fa from "../locales/fa";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  }

  const t = language === "fa" ? fa : en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
