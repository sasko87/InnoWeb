import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
