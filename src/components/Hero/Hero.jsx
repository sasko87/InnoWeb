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
//       whileInView="visible"
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.2 }}
//       className={classes.hero}
//     >
//       <div className={classes.heroLeftContent}>
//         <div className={classes.textContainer}>
//           <h1 className={classes.typing}>
//             Your Ideas, Our Code <br /> — Let’s Make It Real
//           </h1>
//           <p className={classes.description}>
//             From concept to launch, we craft websites that are
//             <br /> fast, functional, and designed to convert.
//           </p>
//         </div>
//         <div className={classes.heroCardsContainer}>
//           {heroCard.map((card, index) => (
//             <Card key={index} image={card.image} title={card.title} />
//           ))}
//         </div>
//       </div>

//       <motion.picture
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
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

const Hero = () => {
  const heroCard = [
    {
      image: MobileImg,
      title: "Mobile Friendly",
    },
    {
      image: MaintainanceImg,
      title: "Maintainance",
    },
    {
      image: CustomDesignImg,
      title: "Custom Design",
    },
    {
      image: MobileImg,
      title: "Mobile Friendly",
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
          <h1 className={classes.typing}>
            Your Ideas, Our Code <br /> — Let’s Make It Real
          </h1>
          <p className={classes.description}>
            From concept to launch, we craft websites that are
            <br /> fast, functional, and designed to convert.
          </p>
        </div>
        <div className={classes.heroCardsContainer}>
          {heroCard.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} />
          ))}
        </div>
      </div>

      <motion.picture
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={classes.HeroImageContainer}
      >
        <img src={HeroImg} alt="Hero Image" />
      </motion.picture>
    </motion.main>
  );
};

export default Hero;
