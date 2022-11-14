import React from "react";
import cx from "classnames";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import Macdo from "../../assets/macdo.png";
import TeuchiBox from '../../assets/teuchi/teuchiBox.png'
import MixFood from '../../assets/teuchi/mix.png'
import Elipse from "../../assets/elipse.png";
import Shine from "../../assets/shine.png";
import SurprisedMan from "../../assets/surprisedman.png";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={cx(styles.col, rStyles.col)}>
          <img width="100%" src={Macdo} alt="macdo" />
        </div>
        <div className={cx(styles.col, rStyles.col)}>
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Today Our</span>
          <div className={cx(styles.featurePackWrapper, rStyles.featurePackWrapper)}>
            <div style={{ position: "relative", marginRight: 20 }}>
              <div className={cx(styles.shineWrapper, rStyles.shineWrapper)}>
                <img className={cx(styles.shineImg, rStyles.shineImg)} src={Shine} alt="shine" />
              </div>
              <h3 className={cx(styles.featureText, rStyles.featureText)}>Feature</h3>
              <div>
                <img className={cx(styles.elipseImg, rStyles.elipseImg)} src={Elipse} alt="elipse" />
              </div>
            </div>
            <div>
              <h3 className={cx(styles.packText, rStyles.packText)}>Pack</h3>
            </div>
          </div>
          <div className={cx(styles.description, rStyles.description)}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <button className={styles.galleryBtn}>VIEW FOOD GALLERY</button>
        </div>
      </div>
      <div className={cx(styles.row, styles.rowReverse)}>
        <div className={cx(styles.col, rStyles.col)}>
          <img width="100%" src={MixFood} alt="macdo" />
        </div>
        <div className={cx(styles.col, rStyles.col)}>
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Have Fast</span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <button className={styles.galleryBtn}>READ MORE</button>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.row}>
          <div className={cx(styles.col, rStyles.col)}>
            <div className={styles.testimonialTextWrapper}>
              <p className={cx(styles.testimonialTitle, rStyles.testimonialTitle)}>
                "We are a best, premiuim, yummy, good quality fast food seller
                in USA"
              </p>
              <p className={styles.testimonialTitleName}>KADIN SEPTIMUS</p>
              <p className={styles.testimonialTitlePost}>Head of Product</p>
            </div>
          </div>
          <div className={cx(styles.col, rStyles.col)}>
            <img width="100%" src={SurprisedMan} alt="surprised man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
