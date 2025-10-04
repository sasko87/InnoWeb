import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import classes from "./OurServices.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Subtitle from "../../components/Subtitle/Subtitle";

const OurServices = () => {
  const { t } = useTranslation();

  const services = [
    { key: "webapps" },
    { key: "websites" },
    { key: "custom" },
    { key: "seo" },
    { key: "maintenance" },
  ];

  return (
    <div className={classes.ourServices}>
      {/* <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("services.title")}
      </motion.h2> */}
      <Subtitle>{t("services.title")}</Subtitle>

      <div className={classes.serviceCards}>
        {services.map(({ key }, index) => (
          <ServiceCard
            key={index}
            title={t(`services.list.${key}.title`)}
            subtitle={t(`services.list.${key}.subtitle`)}
            description={t(`services.list.${key}.description`)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
