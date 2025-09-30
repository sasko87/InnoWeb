import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.spinner}></div>
      <p className={classes.loaderText}>Loading...</p>
    </div>
  );
}

export default Loader;
