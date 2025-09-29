import React from "react";
import { motion } from "framer-motion";
import PricingCard from "../../components/PricingCard/PricingCard";
import classes from "./Pricing.module.css";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <div className={classes.page}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("pricing.title")}
      </motion.h2>

      <motion.div
        className={classes.cards}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {plans.map((plan, idx) => (
          <motion.div
            className={classes.pricingCardsContainer}
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <PricingCard {...plan} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className={classes.note}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {t("pricing.note")}
      </motion.p>
    </div>
  );
};

export default Pricing;
