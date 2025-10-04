import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import classes from "./About.module.css";
import checkmark from "/checkmark.gif";
import Subtitle from "../../components/Subtitle/Subtitle";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.aboutContainer}>
      {/* <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("about.title")}
      </motion.h2> */}
      <Subtitle>{t("about.title")}</Subtitle>

      <motion.p
        className={classes.paragraphOne}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {t("about.tagline")}
      </motion.p>

      <motion.p
        className={classes.paragraphTwo}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {t("about.description")}
      </motion.p>

      <motion.div
        className={classes.cards}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div className={classes.card}>
          <p className={classes.paragraphOne}>{t("about.vision.title")}</p>
          <p className={classes.paragraphTwo}>{t("about.vision.text")}</p>
        </motion.div>

        <motion.div className={classes.card}>
          <p className={classes.paragraphOne}>{t("about.mission.title")}</p>
          <p className={classes.paragraphTwo}>{t("about.mission.text")}</p>
        </motion.div>
      </motion.div>

      <div className={classes.whyChooseUsContainer}>
        {/* <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {t("about.whyChooseUs.title")}
        </motion.h2> */}
        <Subtitle>{t("about.whyChooseUs.title")}</Subtitle>

        <div className={classes.whyChooseUsContent}>
          <motion.div
            className={classes.whyLeft}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className={classes.paragraphOne}>
              {t("about.whyChooseUs.subtitle")}
            </p>
            <p className={classes.paragraphTwo}>
              {t("about.whyChooseUs.text")}
            </p>
          </motion.div>

          <motion.div
            className={classes.whyRight}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ul>
              {t("about.whyChooseUs.points", { returnObjects: true }).map(
                (point, idx) => (
                  <li key={idx}>
                    <span className={classes.checkmarkContainer}>
                      <img src={checkmark} className={classes.checkmark} />
                    </span>
                    {point}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
