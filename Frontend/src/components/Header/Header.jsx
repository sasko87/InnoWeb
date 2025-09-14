// import Button from "../Button/Button";
// import classes from "./Header.module.css";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleOrderClick = () => {
//     navigate("/pricing");
//   };
//   return (
//     <>
//       <header>
//         <div>
//           <a href="/">
//             {/* <img src="/logo1.png" alt="InnoWeb Logo" className={classes.logo} /> */}
//             <img
//               src="/logo.png"
//               alt="InnoWeb Logo"
//               className={classes.logoLogo}
//             />
//           </a>
//         </div>

//         <nav>
//           <ul className={classes.navList}>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="/services">Services</a>
//             </li>
//             <li>
//               <a href="/projects">Projects</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//             <li>
//               <Button onClick={handleOrderClick}>Order Now</Button>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { scroller } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "pricing", label: "Pricing" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) =>
    scroller.scrollTo(id, { smooth: true, duration: 600, offset: -80 });

  const handleClick = (id, e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("contact");
      return;
    }

    const trackScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "hero";

      const found = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          return scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight;
        }
        return false;
      });

      if (found) current = found.id;
      setActive(current);
    };

    window.addEventListener("scroll", trackScroll);
    trackScroll();

    return () => window.removeEventListener("scroll", trackScroll);
  }, [location.pathname]);

  return (
    <header className={classes.header}>
      <RouterLink to="/">
        <img src="/logo.png" alt="InnoWeb Logo" className={classes.logoLogo} />
      </RouterLink>

      <nav>
        <ul className={classes.navList}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className={`${classes.navLink} ${
                  active === id ? classes.active : ""
                }`}
                onClick={(e) => handleClick(id, e)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <RouterLink
              to="/contact"
              className={`${classes.navLink} ${
                active === "contact" ? classes.active : ""
              }`}
            >
              Contact
            </RouterLink>
          </li>
          <li>
            <Button onClick={(e) => handleClick("pricing", e)}>
              Order Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
