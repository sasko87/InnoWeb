import React from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { scroller } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import classes from "./Nav.module.css";

const sections = [
  { id: "hero", key: "nav.home" },

  { id: "services", key: "nav.services" },
  { id: "projects", key: "nav.projects" },
  { id: "pricing", key: "nav.pricing" },
  { id: "about", key: "nav.about" },
];

const Nav = ({ className, onLinkClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) =>
    scroller.scrollTo(id, { smooth: true, duration: 600, offset: -80 });

  const handleClick = (id, e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
      onLinkClick?.();
    } else {
      onLinkClick?.();

      scrollToSection(id);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("contact");
      return;
    }

    const trackScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "hero";

      const found = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          return scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight;
        }
        return false;
      });

      if (found) current = found.id;
      setActive(current);
    };

    window.addEventListener("scroll", trackScroll);
    trackScroll();

    return () => window.removeEventListener("scroll", trackScroll);
  }, [location.pathname]);
  return (
    <nav className={className}>
      <ul className={classes.navList}>
        {sections.map(({ id, key }) => (
          <li key={id}>
            <a
              href={`/#${id}`}
              className={`${classes.navLink} ${
                active === id ? classes.active : ""
              }`}
              onClick={(e) => handleClick(id, e)}
            >
              {t(key)}
            </a>
          </li>
        ))}
        <li>
          <RouterLink
            to="/contact"
            className={`${classes.navLink} ${
              active === "contact" ? classes.active : ""
            }`}
            onClick={onLinkClick}
          >
            {t("nav.contact")}
          </RouterLink>
        </li>
        <li>
          <Button
            onClick={(e) => {
              handleClick("pricing", e);
              onLinkClick?.();
            }}
          >
            {t("nav.order")}
          </Button>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
