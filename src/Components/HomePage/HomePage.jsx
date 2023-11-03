import React from 'react';
import styles from './HomePage.module.css';
import imageDev from '../../images/posterpixar.png';
import Line from '../../images/Line.png';
import LinkedIn from '../../images/mdi_linkedin.png';
import GitHub from '../../images/github.png';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.seccionPrincipal}>
      <img src={Line} alt="Line" className={styles.line} />
      <img src={GitHub} alt="GitHub" className={styles.github} />
      <img src={LinkedIn} alt="LinkedIn" className={styles.linkedin} />
      <img src={Line} alt="Line" className={styles.line} />
      </div>
      <div className={styles.leftSection}>
      <p className={styles.titulo}>Hola, Soy</p>
      <p className={styles.subtitulo}>Yennyfer</p>
      <p className={styles.descripcion}>
        Desarrolladora Web | Diseñadora UX/UI  | Freelancer
      </p>
        <button className={styles.hireButton}>CONTRATAME</button>
        <button className={styles.knowMoreButton}>SABER MÁS!</button>
      </div>
      <div className={styles.rightSection}>
        <img src={imageDev} alt="Tu Imagen" />
      </div>
    </div>
  );
};

export default HomePage;
