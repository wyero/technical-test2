import React from "react";
import styles from "./style.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Body = (props) => {
  return (
    <section className={styles.body}>
      <div>
        <Sidebar />
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Body;
