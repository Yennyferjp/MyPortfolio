import React from 'react';
import styles from './NavBar.module.css';
import logoImage from '../../images/logoImage.png';

const NavBar = () => {

  function scrollIntoView(componentId) {
    const element = document.getElementById(componentId);
    element.scrollIntoView({
      behavior: 'smooth', 
    });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Tu Logo" />
      </div>
      <div>
        <ul className={styles.navlinks}>
          <li className={styles.navlink} onClick={() => scrollIntoView('home')}>Inicio</li>
          <li className={styles.navlink} onClick={() => scrollIntoView('aboutme')}>Sobre Mi</li>
          <li className={styles.navlink} onClick={() => scrollIntoView('proyects')}>Proyectos</li>
          <li className={styles.navlink} onClick={() => scrollIntoView('contactme')}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
