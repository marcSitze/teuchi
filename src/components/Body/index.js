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
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Entreprise De</span>
          <div className={cx(styles.featurePackWrapper, rStyles.featurePackWrapper)}>
            <div style={{ position: "relative", marginRight: 20 }}>
              <div className={cx(styles.shineWrapper, rStyles.shineWrapper)}>
                <img className={cx(styles.shineImg, rStyles.shineImg)} src={Shine} alt="shine" />
              </div>
              <h3 className={cx(styles.featureText, rStyles.featureText)}>Pattes</h3>
              <div>
                <img className={cx(styles.elipseImg, rStyles.elipseImg)} src={Elipse} alt="elipse" />
              </div>
            </div>
            <div>
              <h3 className={cx(styles.packText, rStyles.packText)}>Alimentaire</h3>
            </div>
          </div>
          <div className={cx(styles.description, rStyles.description)}>
            <p>
            Teuchi est le propriétaire de l'entreprise TEUCHI spécialisée dans la fabrication des pattes alimentaires.
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
          <span className={cx(styles.rightTitle, rStyles.rightTitle)}>Sa Vision</span>
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
            Proposer des pattes avec un goût varié de ce qui se vend d'habitude. On a notamment les saveurs pimentée et citronnée mise en avant.
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
                "La marque TEUCHI vise des personnes responsables à la découverte de chose nouvelle, et qui aiment bien faire les choses d'elle même."
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
