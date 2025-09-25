import React from "react";
import classes from "./Card.module.css";

const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className={classes.card}>
      {image && (
        <div className={classes.imageContainer}>
          <img src={image} alt="Card" className={classes.cardImage} />
        </div>
      )}
      <div className={classes.textContainer}>
        <h2 className={classes.cardTitle}>{title}</h2>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
