import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import classes from "./Projects.module.css";
import monitor from "../../assets/monitor.webp";
import { useTranslation } from "react-i18next";
import Subtitle from "../../components/Subtitle/Subtitle";
import project1 from "../../assets/projects/project1.webp";
import project2 from "../../assets/projects/project2.webp";
import project3 from "../../assets/projects/project3.webp";
import project4 from "../../assets/projects/project4.webp";
import project5 from "../../assets/projects/project5.webp";
import project6 from "../../assets/projects/project6.webp";
import project7 from "../../assets/projects/project7.webp";
import project8 from "../../assets/projects/project8.webp";
import project9 from "../../assets/projects/project9.webp";

// const projectImages = import.meta.glob(
//   "/src/assets/projects/*.{jpg,jpeg,webp}",
//   { eager: true }
// );

const projectImages = [
  { img: project1, url: "https://wvp.mk/index.html" },
  { img: project2, url: "https://mat-trans.mk" },
  { img: project3, url: "https://baumarket.mk" },
  { img: project4, url: "https://stevkovski.xyz/" },
  { img: project5, url: "https://chat.stevkovski.xyz/login" },
  { img: project6, url: "https://ecommercewebsite-flame.vercel.app/" },
  { img: project7, url: "https://ecommercewebsite-flame.vercel.app/" },
  { img: project8, url: "https://mentor-token.stevkovski.xyz/" },
  { img: project9, url: "https://coffe-shop-sigma-seven.vercel.app/" },
];

// const projectLinks = {
//   "project1.webp": "https://wvp.mk/index.html",
//   "project2.webp": "https://mat-trans.mk",
//   "project3.webp": "https://baumarket.mk",
//   "project4.webp": "https://stevkovski.xyz/",
//   "project5.webp": "https://chat.stevkovski.xyz/login",
//   "project6.webp": "https://ecommercewebsite-flame.vercel.app/",
//   "project7.webp": "https://ecommercewebsite-flame.vercel.app/",
//   "project8.webp": "https://mentor-token.stevkovski.xyz/",
//   "project9.webp": "https://coffe-shop-sigma-seven.vercel.app/",
// };

const spring = { type: "spring", stiffness: 120, damping: 18 };

const Projects = () => {
  const { t } = useTranslation();
  const projects = projectImages;
  // const projects = Object.values(projectImages).map((imgObj) => {
  //   const img = imgObj.default;
  //   const fileName = img.split("/").pop();
  //   return { img, url: projectLinks[fileName] || "#" };
  // });

  const chunked = [];
  for (let i = 0; i < projects.length; i += 6) {
    chunked.push(projects.slice(i, i + 6));
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1025);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const nextMobile = () => setActiveIndex((i) => (i + 1) % projects.length);
  const prevMobile = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  const [activeBlock, setActiveBlock] = useState(0);
  const scrollRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(
      () => {
        if (isMobile) {
          setActiveIndex((i) => (i + 1) % projects.length);
        } else {
          setActiveBlock((i) => {
            const next = (i + 1) % chunked.length;
            if (scrollRef.current) {
              scrollRef.current.scrollTo({
                left: next * scrollRef.current.offsetWidth,
                behavior: "smooth",
              });
            }
            return next;
          });
        }
      },
      isMobile ? 3000 : 4000
    );

    return () => clearInterval(interval);
  }, [isMobile, projects.length, chunked.length, isHovered]);

  useEffect(() => {
    if (isMobile) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveBlock((i) => {
          const next = (i + 1) % chunked.length;
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              left: next * scrollRef.current.offsetWidth,
              behavior: "smooth",
            });
          }
          return next;
        });
      }
      if (e.key === "ArrowLeft") {
        setActiveBlock((i) => {
          const prev = (i - 1 + chunked.length) % chunked.length;
          if (scrollRef.current) {
            scrollRef.current.scrollTo({
              left: prev * scrollRef.current.offsetWidth,
              behavior: "smooth",
            });
          }
          return prev;
        });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobile, chunked.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => (isMobile ? nextMobile() : null),
    onSwipedRight: () => (isMobile ? prevMobile() : null),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div
      className={classes.projectsContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("projects.title")}
      </motion.h2> */}
      <Subtitle>{t("projects.title")}</Subtitle>

      {!isMobile ? (
        <>
          <div style={{ width: "100%" }}>
            <div ref={scrollRef} className={classes.scrollContainer}>
              {chunked.map((block, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className={classes.projectsGrid}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={classes.column}>
                    {block[0] && (
                      <ProjectMonitor project={block[0]} custom="left" />
                    )}
                    {block[1] && (
                      <ProjectMonitor project={block[1]} custom="left" />
                    )}
                  </div>
                  <div className={`${classes.column} ${classes.centerColumn}`}>
                    {block[2] && (
                      <ProjectMonitor project={block[2]} custom="center" />
                    )}
                    {block[3] && (
                      <ProjectMonitor project={block[3]} custom="center" />
                    )}
                  </div>
                  <div className={classes.column}>
                    {block[4] && (
                      <ProjectMonitor project={block[4]} custom="right" />
                    )}
                    {block[5] && (
                      <ProjectMonitor project={block[5]} custom="right" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={classes.pagination}>
            {chunked.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * scrollRef.current.offsetWidth,
                      behavior: "smooth",
                    });
                  }
                  setActiveBlock(index);
                }}
                className={`${classes.dot} ${
                  activeBlock === index ? classes.activeDot : ""
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={classes.carouselContainer} {...handlers}>
          {projects.map((project, index) => {
            const offset =
              (index - activeIndex + projects.length) % projects.length;
            let style;

            if (offset === 0)
              style = { scale: 1.2, x: 0, opacity: 1, zIndex: 3 };
            else if (offset === 1)
              style = { scale: 0.9, x: 200, opacity: 0.8, zIndex: 2 };
            else if (offset === projects.length - 1)
              style = { scale: 0.9, x: -200, opacity: 0.8, zIndex: 2 };
            else
              style = {
                scale: 0.7,
                x: offset < projects.length / 2 ? 400 : -400,
                opacity: 0.4,
                zIndex: 1,
              };

            return (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.carouselItem}
                animate={style}
                transition={spring}
                whileHover={
                  offset === 0 ? { scale: 1.3, y: -15, transition: spring } : {}
                }
                whileTap={offset === 0 ? { scale: 1.1 } : {}}
                style={{
                  zIndex: style.zIndex,
                  pointerEvents: offset === 0 ? "auto" : "none",
                  cursor: offset === 0 ? "pointer" : "default",
                }}
              >
                <div className={classes.monitorWrapper}>
                  <img
                    src={monitor}
                    alt="Monitor"
                    className={classes.monitorFrame}
                  />
                  <img
                    src={project.img}
                    alt="project"
                    className={classes.projectInside}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ProjectMonitor = ({ project, custom }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={classes.monitorWrapper}
  >
    <motion.div
      className={classes.monitorContent}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateY: custom === "left" ? 20 : custom === "right" ? -20 : 0,
      }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.1,
        rotateX: -5,
        rotateY: custom === "left" ? 25 : custom === "right" ? -25 : 0,
        transition: spring,
      }}
    >
      <img src={monitor} alt="Monitor" className={classes.monitorFrame} />
      <img src={project.img} alt="project" className={classes.projectInside} />
    </motion.div>
  </a>
);

export default Projects;
