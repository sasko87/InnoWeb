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

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={classes.header}>
      <RouterLink to="/">
        <img src="/logo.webp" alt="InnoWeb Logo" className={classes.logoLogo} />
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
          <Modal onClose={closeMenu}>
            <div className={classes.mobileMenu}>
              <Nav onLinkClick={closeMenu} />
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
