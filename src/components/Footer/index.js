import React from "react";
import cx from 'classnames'
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import FoodLogo from "../../assets/foodLogo.png";
import LogoBlack from "../../assets/teuchi/logoBlack.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className={cx(styles.container, rStyles.container)}>
      <div className={cx(styles.FormContainer, rStyles.FormContainer)}>
        <div className={cx(styles.form, rStyles.form)}>
          <input
            className={styles.input}
            type={"email"}
            placeholder="Email Address"
          />
          <button className={styles.btn}>SUBSCRIBE</button>
        </div>
      </div>
      <div className={cx(styles.footer, rStyles.footer)}>
        <div>
          <span className={styles.menuItem}>About Us</span>
          <span className={styles.menuItem}>Our Foods</span>
          <span className={styles.menuItem}>Blog</span>
          <span className={styles.menuItem}>FAQ</span>
          <span className={styles.menuItem}>Contact</span>
        </div>
        <div>
          <img className={cx(styles.logo, rStyles.logo)} src={LogoBlack} alt="logo"/>
          <div>
            <img className={styles.icon} src={Facebook} alt="facebook icon"/>
            <img className={styles.icon} src={Twitter} alt="facebook icon"/>
            <img className={styles.icon} src={Instagram} alt="facebook icon"/>
            <img className={styles.icon} src={Linkedin} alt="facebook icon"/>
          </div>
        </div>
        <div>
          <p className={styles.footerText}>&copy; Copyright by fodo seller All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
