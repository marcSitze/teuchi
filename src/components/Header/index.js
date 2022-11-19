import React from "react";
import cx from "classnames";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import Elipse from "../../assets/elipse.png";
import Shine from "../../assets/shine.png";
import ArrowLeft from '../../assets/arrowLeft.png'
import ArrowRight from '../../assets/arrowRight.png'
import Cart from '../../assets/cart.png'
import TeuchiBox from '../../assets/teuchi/teuchiBox.png'
import Egg from '../../assets/teuchi/egg.png'
import Orange from '../../assets/teuchi/orange.png'
import EggBreak from '../../assets/teuchi/eggBreak.png'
import Pepper from '../../assets/teuchi/pepper.png'


import FoodItem from "./FoodItem";

const Header = () => {
  const foods = [
    {
      id: 0,
      name: "Eggs",
      price: "$8.99 - $18.99",
      img: Egg,
    },
    {
      id: 1,
      name: "Lemon",
      price: "$8.99 - $18.99",
      img: Orange,
    },
    {
      id: 0,
      name: "Pepper",
      price: "$8.99 - $18.99",
      img: Pepper,
    },
    {
      id: 0,
      name: "Raw eggs",
      price: "$8.99 - $18.99",
      img: EggBreak,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={cx(styles.textContainer, rStyles.textContainer)}>
        <p className={`${cx(styles.leftText, rStyles.leftText)} animate__animated animate__bounceInLeft`}>
          <div style={{ position: "relative" }}>
            <span>GREAT</span>
            <span className={cx(styles.shineWrapper, rStyles.shineWrapper)}>
              <img className={cx(styles.shine, rStyles.shine)} src={Shine} alt="" />
            </span>
          </div>
          <div style={{ display: "flex", margin: 0, padding: 0 }}>
            <span className={styles.fastWrapper}>
              <span className={styles.ranchoText}>Fast</span>
              <img className={cx(styles.elipse, rStyles.elipse)} src={Elipse} alt="elipse" />
            </span>
            <span>FOOD</span>
          </div>
          SHOP
        </p>
        <div className={`${cx(styles.rightTextContainer, rStyles.rightTextContainer)}  animate__animated animate__bounceInRight`}>
          <p className={`${styles.rightText}`}>
            <div style={{position: 'relative'}}>
              <span className={cx(styles.rightItemText, rStyles.rightItemText)}>Teuchi</span>
              <span className={cx(styles.shineRight, rStyles.shineRight)}>
                <img width={40} src={Shine} alt="" />
              </span>
            </div>
            <span className={cx(styles.rightItemText, rStyles.rightItemText)}>Pack</span>
            <br />
            <span className={cx(styles.rightItemText, rStyles.rightItemText, styles.active)}>
              $19.99
            </span>
          </p>
          <p className={styles.cartBtn}><span><img style={{marginRight: 10}} width={14} src={Cart} alt="cart"/></span>ADD TO CART</p>
        </div>
      </div>
      <div className={styles.arrowWrapper}>
          <div className={cx(styles.arrow, rStyles.arrow)}><img className={cx(styles.arrowImg, rStyles.arrowImg)} src={ArrowLeft} alt="left arrow" /></div>
          <div className={cx(styles.arrow, rStyles.arrow)}><img className={cx(styles.arrowImg, rStyles.arrowImg)} src={ArrowRight} alt="right arrow" /></div>
        </div>
      <div className={styles.headerBottom}>
        <div className={`${styles.middleImgContainer} animate__animated animate__zoomInUp`}>
          <img className={styles.middleImg} src={TeuchiBox} alt="burger" />
        </div>
        <h1 className={cx(styles.bgText, rStyles.bgText)}>Teuchi</h1>
        <h2 className={cx(styles.bottomTitle, rStyles.bottomTitle)}>Our Premium Ingredients</h2>
        <div className={cx(styles.foods, rStyles.foods)}>
          {foods.map((item, i) => (
            <FoodItem key={i} food={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
