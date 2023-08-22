import React from "react";
import styles from './style.module.css';

const Navbar = (props) => {
  return <nav className={styles.nav}>{props.title}</nav>;
};

export default Navbar;
