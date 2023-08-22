import React from "react";
import styles from "./style.module.css";

const Button = (props) => {
  return (
    <button className={styles.button} type={props.type || "submit"}>
      {props.children}
    </button>
  );
};

export default Button;
