import React from "react";
import classes from "./Loader.module.css";
import RocketImg from "/Rocket.gif";

function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <img src={RocketImg} alt="Rocket Icon" />
      <p className={classes.loaderText}>Loading...</p>
    </div>
  );
}

export default Loader;
