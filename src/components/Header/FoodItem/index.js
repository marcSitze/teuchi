import React from "react";
import styles from './Styles.module.css'

const FoodItem = ({ food }) => {
  const { img, name, price } = food

  return (
    <div className={styles.item}>
      <img width={250} src={img} alt="img" />
      <h4 className={styles.title}>{name}</h4>
      <h5 className={styles.price}>{price}</h5>
    </div>
  );
};

export default FoodItem;
