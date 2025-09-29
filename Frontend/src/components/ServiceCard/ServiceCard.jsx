import React from "react";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ title, subtitle, description }) => {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
