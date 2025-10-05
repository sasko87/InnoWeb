import React, { useState } from "react";
import logoImg from "/logo.webp";
import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import PricingCard from "../PricingCard/PricingCard";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = t("pricing.plans", { returnObjects: true });

  const handleServiceClick = (service) => {
    const matches = plans.filter(
      (plan) =>
        plan.category === service ||
        plan.category.includes(service) ||
        service.includes(plan.category)
    );

    setSelectedPlan(matches.length > 0 ? matches : null);
  };

  const handleClose = () => setSelectedPlan(null);
  return (
    <>
      <div className={classes.footerDivider}></div>{" "}
      <footer>
        <div className={classes.footerContainer}>
          <div className={classes.footerSectionLogo}>
            <a href="/">
              <img
                loading="lazy"
                src={logoImg}
                alt="InnoWebLogo"
                className={classes.logo}
              />
            </a>
            <p className={classes.footerDescription}>
              {t("footer.description")}
            </p>
          </div>

          <div className={`${classes.footerSection} ${classes.footerServices}`}>
            <h3>{t("footer.services.title")}</h3>
            <ul>
              {t("footer.services.list", { returnObjects: true }).map(
                (service, idx) => (
                  <li
                    className={classes.footerServicesList}
                    key={idx}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className={classes.footerSection}>
            <div className={classes.footerContactContainer}>
              <h3 className={classes.footerSectionTitle}>
                {t("footer.contact.title")}
              </h3>

              <p>{t("footer.contact.email")}: support@yourcompany.com</p>

              <p>tel:+38970123456</p>
              <a className={classes.socialContact} href="/contact">
                {t("footer.contactPage")} →
              </a>
            </div>
            <div className={classes.social}>
              <p>{t("footer.follow")}</p>
              <div className={classes.socialMedia}>
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
              </div>
              <span className={classes.facebookIcon}>
                <BsFacebook />
              </span>
              <span className={classes.instagramIcon}>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>

        <p className={classes.footerBottom}>{t("footer.rights")}</p>
      </footer>
      {selectedPlan && (
        <Modal
          active={!!selectedPlan}
          onClose={handleClose}
          className={classes.footerModal}
          closeButton
        >
          {selectedPlan.map((plan, idx) => {
            return (
              <PricingCard
                key={idx}
                category={plan.category}
                title={plan.title}
                features={plan.features}
                price={plan.price}
                modalClose={handleClose}
              />
            );
          })}
        </Modal>
      )}
    </>
  );
};

export default Footer;
