import React from "react";
import { motion } from "framer-motion";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.projectsContainer}>
      <motion.h2
        className={classes.subTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Projects
      </motion.h2>
    </div>
  );
};

export default Projects;
