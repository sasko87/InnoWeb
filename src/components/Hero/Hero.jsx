import classes from "./Hero.module.css";
import HeroImg from "../../assets/hero-image.png";
import Card from "../Card/Card.jsx";
import MaintainanceImg from "../../assets/maintainance.png";
import MobileImg from "../../assets/mobile.png";
import CustomDesignImg from "../../assets/custom-design.png";

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
    }
  ];

  return (
    <main className={classes.hero}>
      <div className={classes.heroLeftContent}>
        <div className={classes.textContainer}>
          <h1>
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

      <picture className={classes.HeroImageContainer}>
        <img src={HeroImg} alt="Hero Image" />
      </picture>
    </main>
  );
};

export default Hero;
