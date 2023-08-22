import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const CardArticle = (props) => {
  return (
    <section className={styles.cardArticle}>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.desc}</p>
    </section>
  );
};

export default CardArticle;
