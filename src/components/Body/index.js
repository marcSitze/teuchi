import React from "react";
import cx from "classnames";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import Plate from "../../assets/plate.png";
import TeuchiBox from '../../assets/teuchi/teuchiBox.png'
import MixFood from '../../assets/teuchi/mix.png'
import Elipse from "../../assets/elipse.png";
import Shine from "../../assets/shine.png";
import SurprisedChef from "../../assets/surprisechef.png";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={cx(styles.col, rStyles.col)}>
          <img width="100%" src={Plate} alt="plate" />
        </div>
        <div className={cx(styles.col, rStyles.col)}>
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Feel the</span>
          <div className={cx(styles.featurePackWrapper, rStyles.featurePackWrapper)}>
            <div style={{ position: "relative", marginRight: 20 }}>
              <div className={cx(styles.shineWrapper, rStyles.shineWrapper)}>
                <img className={cx(styles.shineImg, rStyles.shineImg)} src={Shine} alt="shine" />
              </div>
              <h3 className={cx(styles.featureText, rStyles.featureText)}>Taste</h3>
              <div>
                <img className={cx(styles.elipseImg, rStyles.elipseImg)} src={Elipse} alt="elipse" />
              </div>
            </div>
            <div>
              <h3 className={cx(styles.packText, rStyles.packText)}>Differntly</h3>
            </div>
          </div>
          <div className={cx(styles.description, rStyles.description)}>
            <p>
            Teuchi is the owner of the TEUCHI company specializing in the manufacture of food paws
            </p>
          </div>
          <button className={styles.galleryBtn}>VIEW FOOD GALLERY</button>
        </div>
      </div>
      <div className={cx(styles.row, styles.rowReverse)}>
        <div className={cx(styles.col, rStyles.col)}>
          <img width="100%" src={MixFood} alt="plate" />
        </div>
        <div className={cx(styles.col, rStyles.col)}>
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Our Goal</span>
          <div className={cx(styles.featurePackWrapper, rStyles.featurePackWrapper)}>
            <div style={{ position: "relative", marginRight: 20 }}>
              <div className={cx(styles.shineWrapper, rStyles.shineWrapper)}>
                <img className={cx(styles.shineImg, rStyles.shineImg)} src={Shine} alt="shine" />
              </div>
              <h3 className={cx(styles.featureText, rStyles.featureText)}>Delivery</h3>
              <div>
                <img className={cx(styles.elipseImg, rStyles.elipseImg)} src={Elipse} alt="elipse" />
              </div>
            </div>
            <div>
              <h3 className={cx(styles.packText, rStyles.packText)}>Facility</h3>
            </div>
          </div>
          <div className={cx(styles.description, rStyles.descriptionWrapper)}>
            <p>
            Offer paws with a varied taste of what is usually sold. We have in particular the spicy and lemony flavors highlighted.            </p>
          </div>
          <button className={styles.galleryBtn}>READ MORE</button>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.row}>
          <div className={cx(styles.col, rStyles.col)}>
            <div className={styles.testimonialTextWrapper}>
              <p className={cx(styles.testimonialTitle, rStyles.testimonialTitle)}>
              " We are proud to make the difference in the market, with something that people actually enjoy eating, for breakfast and lunch"              </p>
              <p className={cx(styles.testimonialTitleName, rStyles.testimonialTitleName)}>KADIN SEPTIMUS</p>
              <p className={cx(styles.testimonialTitlePost, rStyles.testimonialTitlePost)}>Head of Product</p>
            </div>
          </div>
          <div className={cx(styles.col, rStyles.col)}>
            <img width="100%" src={SurprisedChef} alt="surprised man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
