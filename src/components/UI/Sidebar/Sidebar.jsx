import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { imagenunez } from '../../../assets/image';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebarFirst}>
        <img src={imagenunez} alt="nunez" />
        <p>darwin nunez</p>
      </div>
      <div className={styles.sidebarSecond}>
        <Link to='/article' className={styles.link}>article</Link>
        <Link to='/profile' className={styles.link}>profile</Link>
      </div>
    </section>
  )
}

export default Sidebar