import React from "react";
import styles from "./style.module.css";

const Card = (props) => {
  return <div className={styles.card}>
    <h1>{props.title}</h1>
    {props.children}
  </div>;
};

export default Card;
