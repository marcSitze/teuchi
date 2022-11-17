import React, { useState } from "react";
import cx from "classnames";
import styles from "./Style.module.css";
import rStyles from "./Responsive.module.css";
import FoodLogo from "../../../assets/foodLogo.png";
import LogoBlack from "../../../assets/teuchi/logoBlack.png";
import LogoPrimary from "../../../assets/teuchi/logoPrimary.png";
import Shine from "../../../assets/shine.png";
import Menu from '../../../assets/menu.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className={cx(styles.container, toggle ? rStyles.toggleContainer: rStyles.container)}>
      <div className={rStyles.logoWrapper} style={{ position: "relative" }}>
        <img src={LogoPrimary} className={rStyles.logo} width={150} alt="logo" />
        <span style={{ position: "absolute", top: 10, right: 10 }}>
          <img width={40} src={Shine} alt="" />
        </span>
      </div>
      <div className={cx(styles.toggle, rStyles.toggle)}>
        <button className={styles.closeBtn} onClick={handleToggle}>{!toggle ? <img width={60} src={Menu} alt="menu icon" />: <span>&times;</span>}</button>
      </div>
      <span className={cx(styles.separator, rStyles.none)}></span>
      {toggle ? (
        <div className={cx(rStyles.menuContainer)}>
          <div className={cx(styles.menu, rStyles.menu)}>
            <span className={styles.menuItem}>About us</span>
            <span className={styles.menuItem}>Our Foods</span>
            <span className={styles.menuItem}>Recipes</span>
            <span className={styles.menuItem}>FAQ</span>
            <span className={styles.menuItem}>Contact</span>
          </div>
          <div className={rStyles.contact}>
            <span className={cx(styles.menuItem, styles.active)}>Sign In</span>
            <span className={styles.menuItem}>Register</span>
          </div>
        </div>
      ) : (
        <div className={cx(styles.menuContainer, rStyles.hide)}>
          <div className={cx(styles.menu, rStyles.menu)}>
            <span className={styles.menuItem}>About us</span>
            <span className={styles.menuItem}>Our Foods</span>
            <span className={styles.menuItem}>Recipes</span>
            <span className={styles.menuItem}>FAQ</span>
            <span className={styles.menuItem}>Contact</span>
          </div>
          <div className={rStyles.contact}>
            <span className={cx(styles.menuItem, styles.active)}>Sign In</span>
            <span className={styles.menuItem}>Register</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
