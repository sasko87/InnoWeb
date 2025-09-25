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

import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import Modal from "../Modal/Modal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className={classes.header}>
      <RouterLink to="/">
        <img src="/logo.png" alt="InnoWeb Logo" className={classes.logoLogo} />
      </RouterLink>
      <div className={classes.mainNav}>
        <Nav />
      </div>
      <div className={classes.mobileNav}>
        <div
          className={`${classes.hamburger} ${menuOpen ? classes.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {menuOpen && (
          <Modal>
            <div className={classes.mobileMenu}>
              <Nav />
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
