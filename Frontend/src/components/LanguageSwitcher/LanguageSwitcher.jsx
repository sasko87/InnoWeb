import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { FaGlobe } from "react-icons/fa";
import styles from "./LanguageSwitcher.module.css";

const languages = [
  { code: "gb", lang: "en", label: "EN" },
  { code: "mk", lang: "mk", label: "MK" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const savedLanguage = localStorage.getItem("language") || "en";
  const [activeLang, setActiveLang] = useState(savedLanguage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n, savedLanguage]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setActiveLang(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.iconWrapper}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <FaGlobe className={styles.globeIcon} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map(({ code, lang }) => (
            <div
              key={code}
              className={`${styles.dropdownItem} ${
                activeLang === lang ? styles.active : ""
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              <Flag code={code} className={styles.dropdownFlag} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
