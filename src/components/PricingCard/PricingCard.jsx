import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import classes from "./PricingCard.module.css";

const PricingCard = ({ category, title, features, price }) => {
  return (
    <motion.div
      className={classes.card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.category}>{category}</div>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes.features}>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className={classes.price}>{price}</div>
      <div className={classes.button}>
        <Button>Order Now</Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
