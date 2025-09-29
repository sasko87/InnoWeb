import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import classes from "./Projects.module.css";
import monitor from "../../assets/monitor.png";
import { useTranslation } from "react-i18next";

const projectImages = import.meta.glob(
  "../../assets/projects/*.{jpg,jpeg,png}",
  { eager: true }
);

const projectLinks = {
  "project1.png": "https://wvp.mk/index.html",
  "project2.png": "https://mat-trans-9vap.vercel.app/",
  "project3.png": "https://baumarket.mk",
  "project4.png": "https://stevkovski.xyz/",
  "project5.png": "https://chat.stevkovski.xyz/login",
  "project6.png": "https://ecommercewebsite-flame.vercel.app/",
  "project7.png": "https://ecommercewebsite-flame.vercel.app/",
  "project8.png": "https://mentor-token.stevkovski.xyz/",
  "project9.png": "https://coffe-shop-sigma-seven.vercel.app/",
};

const itemVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -150 : dir === "right" ? 150 : 0,
    y: dir === "center" ? 150 : 0,
    rotateY: dir === "left" ? 20 : dir === "right" ? -20 : 0,
    scale: 0.9,
  }),
  visible: (dir) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: dir === "left" ? 20 : dir === "right" ? -20 : 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  }),
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = Object.values(projectImages).map((imgObj) => {
    const img = imgObj.default;
    const fileName = img.split("/").pop().split("?")[0];
    return {
      img,
      url: projectLinks[fileName] || "#",
    };
  });

  const chunked = [];
  for (let i = 0; i < projects.length; i += 6) {
    chunked.push(projects.slice(i, i + 6));
  }

  const scrollRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    },
    onSwipedRight: () => {
      scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={classes.projectsContainer}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("projects.title")}
      </motion.h2>

      <div
        ref={scrollRef}
        className={classes.scrollContainer}
        {...handlers}
        onWheel={(e) => {
          e.currentTarget.scrollBy({
            left: e.deltaY * 0.01,
            behavior: "smooth",
          });
        }}
      >
        {chunked.map((block, blockIndex) => (
          <motion.div
            key={blockIndex}
            className={classes.projectsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={classes.column}>
              {block[0] && (
                <a
                  href={block[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="left"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: 25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[0].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
              {block[1] && (
                <a
                  href={block[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="left"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: 25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[1].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
            </div>

            <div className={`${classes.column} ${classes.centerColumn}`}>
              {block[2] && (
                <a
                  href={block[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="center"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[2].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
              {block[3] && (
                <a
                  href={block[3].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="center"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[3].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
            </div>

            <div className={classes.column}>
              {block[4] && (
                <a
                  href={block[4].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="right"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: -25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[4].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
              {block[5] && (
                <a
                  href={block[5].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.monitorWrapper}
                >
                  <motion.div
                    className={classes.monitorContent}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom="right"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: -5,
                      rotateY: -25,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                  >
                    <img
                      src={monitor}
                      alt="Monitor"
                      className={classes.monitorFrame}
                    />
                    <img
                      src={block[5].img}
                      alt="project"
                      className={classes.projectInside}
                    />
                  </motion.div>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
