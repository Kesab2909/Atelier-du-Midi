import { createContext, useContext, useState } from "react";
import { copy } from "../constants/brand";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export default LanguageContext;
