// import classes from "./Hero.module.css";
// import HeroImg from "../../assets/hero-image.png";
// import Card from "../Card/Card.jsx";
// import MaintainanceImg from "../../assets/maintainance.png";
// import MobileImg from "../../assets/mobile.png";
// import CustomDesignImg from "../../assets/custom-design.png";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const heroCard = [
//     {
//       image: MobileImg,
//       title: "Mobile Friendly",
//     },
//     {
//       image: MaintainanceImg,
//       title: "Maintainance",
//     },
//     {
//       image: CustomDesignImg,
//       title: "Custom Design",
//     },
//     {
//       image: MobileImg,
//       title: "Mobile Friendly",
//     },
//   ];

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <main
//       variants={sectionVariants}
//       initial="hidden"
//       whileinview="visible"
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.2 }}
//       className={classes.hero}
//     >
//       <div className={classes.heroLeftContent}>
//         <div className={classes.textContainer}>
//           <h1 className={classes.typing}>
//             Your Ideas, Our Code <br /> — Let’s Make It Real
//           </h1>
//           <motion.p
//             className={classes.description}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             From concept to launch, we craft websites that are
//             <br /> fast, functional, and designed to convert.
//           </motion.p>
//         </div>
//         <div className={classes.heroCardsContainer}>
//           {heroCard.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.2 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }} // stagger effect
//             >
//               <Card image={card.image} title={card.title} />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <motion.picture
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//         className={classes.HeroImageContainer}
//       >
//         <img src={HeroImg} alt="Hero Image" />
//       </motion.picture>
//     </main>
//   );
// };

// export default Hero;
import classes from "./Hero.module.css";
import HeroImg from "../../assets/hero-image.png";
import Card from "../Card/Card.jsx";
import MaintainanceImg from "../../assets/maintainance.png";
import MobileImg from "../../assets/mobile.png";
import CustomDesignImg from "../../assets/custom-design.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      image: MobileImg,
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
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className={classes.hero}
    >
      <div className={classes.heroLeftContent}>
        <div className={classes.textContainer}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {t("hero.titleOne")}
            <br />
            <span className={classes.titleSeparator}>—</span>
            {t("hero.titleTwo")}
          </motion.h1>
          <motion.p
            className={classes.description}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
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
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }} // stagger effect
            >
              <Card image={card.image} title={card.title} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.picture
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className={classes.HeroImageContainer}
      >
        <img src={HeroImg} alt="Hero" />
      </motion.picture>
    </motion.main>
  );
};

export default Hero;
