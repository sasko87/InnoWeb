import React from "react";
import { motion } from "framer-motion";
import PricingCard from "../../components/PricingCard/PricingCard";
import classes from "./Pricing.module.css";

const plans = [
  {
    category: "Website development",
    title: "Basic",
    features: [
      "Single-language version",
      "Up to 3 functions/links",
      "Up to 20 photos, 1×A4 text",
      "1 email address",
      "Basic SEO optimization",
      "Support Mon–Fri",
      "Monthly visit statistics",
    ],
    price: "12.000 MKD",
  },
  {
    category: "Website development",
    title: "PRO",
    features: [
      "Bilingual version",
      "Up to 7 functions/links",
      "Up to 40 photos, 3×A4 text",
      "3 email addresses",
      "Standard SEO optimization",
      "Support Mon–Sat",
      "Monthly visit statistics",
    ],
    price: "15.000 MKD",
  },
  {
    category: "Website development",
    title: "PREMIUM",
    features: [
      "Multilingual version",
      "Unlimited functions/links",
      "Unlimited photos",
      "10 email addresses",
      "Advanced SEO optimization",
      "24/7 Support",
      "Detailed visit statistics",
    ],
    price: "by Agreement",
  },
  {
    category: "Web Application",
    title: "PREMIUM",
    features: [
      "Multilingual version",
      "Unlimited functions/links",
      "Unlimited photos",
      "10 email addresses",
      "Advanced SEO optimization",
      "24/7 Support",
      "Detailed visit statistics",
    ],
    price: "by Agreement",
  },
  {
    category: "Maintenance",
    title: "PREMIUM",
    features: [
      "Multilingual version",
      "Unlimited functions/links",
      "Unlimited photos",
      "10 email addresses",
      "Advanced SEO optimization",
      "24/7 Support",
      "Detailed visit statistics",
    ],
    price: "3000 MKD",
  },
  {
    category: "Custom Design",
    title: "PREMIUM",
    features: [
      "Multilingual version",
      "Unlimited functions/links",
      "Unlimited photos",
      "10 email addresses",
      "Advanced SEO optimization",
      "24/7 Support",
      "Detailed visit statistics",
    ],
    price: "by Agreement",
  },
];

const Pricing = () => {
  return (
    <div className={classes.page}>
      <motion.h2
        className={classes.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Pricing Plans
      </motion.h2>

      <motion.div
        className={classes.cards}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {plans.map((plan, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }}>
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
        * All plans include 1 year of free maintenance, which covers technical
        updates, bug fixes, and minor adjustments to ensure everything runs
        smoothly after launch.
      </motion.p>
    </div>
  );
};

export default Pricing;
