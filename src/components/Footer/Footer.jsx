import React from "react";
import logoImg from "../../assets/logoImg.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.footerSectionLogo}>
          <a href="/">
            <img src={logoImg} alt="InnoWebLogo" className={classes.logo} />
          </a>
          <p className={classes.footerDescription}>
            We turn ideas into powerful, interactive digital experiences.
            Whether it’s a sleek landing page or a complex web app, our code is
            clean, our designs are sharp, and our results speak for themselves.
          </p>
        </div>

        <div className={classes.footerSection}>
          <h2>Services</h2>
          <ul>
            <li>Website Development</li>
            <li>Web Applications Development</li>
            <li>Maintenance</li>
            <li>SEO Optimization</li>
            <li>Custom Design</li>
          </ul>
        </div>

        <div className={classes.footerSection}>
          <h2 className={classes.footerSectionTitle}>Get in Touch</h2>
          <span>
            <a href="mailto:support@yourcompany.com">
              Email: support@yourcompany.com
            </a>
          </span>
          <span>
            <a href="tel:+38970123456">Phone/WhatsApp: +389 70 123 456</a>
          </span>
          <div className={classes.social}>
            <a href="/contact">Contact Page →</a>
            <p>Follow Us:</p>
            🌐
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <p className={classes.footerBottom}>InnoWeb – All rights reserved</p>
    </footer>
  );
};

export default Footer;
