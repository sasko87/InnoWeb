import classes from "./Hero.module.css";
import HeroImg from "../../assets/hero-img2.webp";
import Card from "../Card/Card.jsx";
import MaintainanceImg from "../../assets/maintainance.webp";
import MobileImg from "../../assets/mobile.webp";
import CustomDesignImg from "../../assets/custom-design.webp";
import IotImg from "../../assets/IOT.webp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import reactImg from "../../assets/React.webp";
import cssImg from "../../assets/CSS.webp";
import nodeImg from "../../assets/Nodejs.webp";
import wordpressImg from "../../assets/WordPress.webp";
import jsImg from "../../assets/JavaScript.webp";
import tailwindImg from "../../assets/Tailwind.webp";

const Hero = () => {
  const { t } = useTranslation();

  const heroCard = [
    {
      image: MobileImg,
      title: t("hero.cards.mobileOne"),
    },
    {
      image: MaintainanceImg,
      title: t("hero.cards.maintenance"),
    },
    {
      image: CustomDesignImg,
      title: t("hero.cards.custom"),
    },
    {
      image: IotImg,
      title: t("hero.cards.mobileTwo"),
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.25 }}
      viewport={{ once: true, amount: 0.2 }}
      className={classes.hero}
    >
      <div className={classes.heroLeftContent}>
        <div className={classes.textContainer}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            {t("hero.titleOne")}
            <br />

            <span className={classes.secondTitle}> {t("hero.titleTwo")}</span>
          </motion.h1>
          <motion.p
            className={classes.description}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
        <div className={classes.heroCardsContainer}>
          {heroCard.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0.15 + index * 0.15 }} // stagger effect
            >
              <Card image={card.image} title={card.title} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.picture
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15, delay: 0.5 }}
        className={classes.HeroImageContainer}
      >
        <img
          src={HeroImg}
          alt="Hero"
          loading="eager"
          className={classes.heroImage}
        />
        <img src={reactImg} alt="React Icon" className={classes.reactImg} />
        <img src={cssImg} alt="Css Icon" className={classes.cssImg} />
        <img
          src={wordpressImg}
          alt="Wordpress Icon"
          className={classes.wordpressImg}
        />
        <img src={nodeImg} alt="Node.js Icon" className={classes.nodeImg} />
        <img src={jsImg} alt="Javascript Icon" className={classes.jsImg} />
        {/* <img src={mongoImg} alt="MongoDB Icon" className={classes.mongoImg} /> */}
        <img
          src={tailwindImg}
          alt="Tailwind Icon"
          className={classes.tailwindImg}
        />
      </motion.picture>
    </motion.main>
  );
};

export default Hero;
