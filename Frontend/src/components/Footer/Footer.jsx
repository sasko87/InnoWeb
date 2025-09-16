import React from "react";
import logoImg from "../../assets/logoImg.png";
import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={classes.footerContainer}>
        {/* Logo + Description */}
        <div className={classes.footerSectionLogo}>
          <a href="/">
            <img src={logoImg} alt="InnoWebLogo" className={classes.logo} />
          </a>
          <p className={classes.footerDescription}>{t("footer.description")}</p>
        </div>

        {/* Services */}
        <div className={classes.footerSection}>
          <h3>{t("footer.services.title")}</h3>
          <ul>
            {t("footer.services.list", { returnObjects: true }).map(
              (service, idx) => (
                <li key={idx}>{service}</li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className={classes.footerSection}>
          <h3 className={classes.footerSectionTitle}>
            {t("footer.contact.title")}
          </h3>
          <span>
            <a href="mailto:support@yourcompany.com">
              {t("footer.contact.email")}: support@yourcompany.com
            </a>
          </span>
          <span>
            <a href="tel:+38970123456">
              {t("footer.contact.phone")}: +389 70 123 456
            </a>
          </span>
          <div className={classes.social}>
            <a className={classes.socialContact} href="/contact">
              {t("footer.contactPage")} →
            </a>
            <p>{t("footer.follow")}</p>
            🌐
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <span className={classes.separator}> | </span>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className={classes.separator}> | </span>
            <a
              href="https://www.linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className={classes.footerBottom}>{t("footer.rights")}</p>
    </footer>
  );
};

export default Footer;
