import React from "react";
import classes from "./ErrorPage.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import errorImg from "../../assets/error.gif";
import spaceman from "../../assets/space.gif";

const ErrorPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between spans
      },
    },
  };

  const spanVariants = {
    hidden: { y: -200, opacity: 0 }, // start above screen
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const descriptionVariants = {
    hidden: { y: 50, opacity: 0 }, // start lower and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1, // wait until after digits land
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={classes.errorPage}>
      <img src={errorImg} alt="404 image" className={classes.errorImg} />
      <motion.div
        className={classes.errorContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p>
          <motion.span variants={spanVariants}>4</motion.span>
        </p>
        <p>
          <motion.span variants={spanVariants}>0</motion.span>
        </p>
        <p>
          <motion.span variants={spanVariants}>4</motion.span>
        </p>
      </motion.div>
      <motion.p
        className={classes.errorDescription}
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        Page not found!
      </motion.p>
      <motion.p
        className={classes.errorDescription}
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        Nothing to see here
      </motion.p>
      <motion.div
        className={classes.errorButton}
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </Button>
      </motion.div>
      <img src={spaceman} alt="" className={classes.spacemanLeft} />
      <img src={spaceman} alt="" className={classes.spacemanRight} />
    </div>
  );
};

export default ErrorPage;
