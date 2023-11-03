import React from 'react';
import styles from './NavBar.module.css';
import logoImage from '../../images/logoImage.png';


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Tu Logo" />
      </div>
      <ul className={styles.navlinks}>
        <li className={styles.navlink}>Inicio</li>
        <li className={styles.navlink}>Sobre Mi</li>
        <li className={styles.navlink}>Skills</li>
        <li className={styles.navlink}>Proyectos</li>
        <li className={styles.navlink}>Contacto</li>
      </ul>
    </nav>
  );
};

export default NavBar;
