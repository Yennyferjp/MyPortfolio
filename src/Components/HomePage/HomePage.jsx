import React, { useState } from 'react';
import styles from './HomePage.module.css';
import imageDev from '../../images/posterpixar.png';
import Line from '../../images/Line.png';
import LinkedIn from '../../images/mdi_linkedin.png';
import GitHub from '../../images/github.png';

const HomePage = () => {
  const [hireButtonScale, setHireButtonScale] = useState(1);
  const [knowMoreButtonScale, setKnowMoreButtonScale] = useState(1);

  const handleHireMouseEnter = () => {
    setHireButtonScale(1.1);
  };

  const handleHireMouseLeave = () => {
    setHireButtonScale(1);
  };

  const handleKnowMouseEnter = () => {
    setKnowMoreButtonScale(1.1);
  }

  const handleKnowMouseLeave = () => {
    setKnowMoreButtonScale(1);
  }

  const [githubImageScale, setGithubImageScale] = useState(1);
  const [linkedinImageScale, setLinkedinImageScale] = useState(1);

  const handleGithubMouseEnter = () => {
    setGithubImageScale(1.1);
  };

  const handleGithubMouseLeave = () => {
    setGithubImageScale(1);
  };

  const handleLinkedinMouseEnter = () => {
    setLinkedinImageScale(1.1);
  };

  const handleLinkedinMouseLeave = () => {
    setLinkedinImageScale(1);
  };

  return (
    <div 
    className={styles.homePage}>
      <div className={styles.seccionPrincipal}>
        <img src={Line} alt="Line" className={styles.line} />
        <img
          src={GitHub}
          alt='GitHub'
          className={styles.github}
          onMouseEnter={handleGithubMouseEnter}
          onMouseLeave={handleGithubMouseLeave}
          style={{ transform: `scale(${githubImageScale})` }} />
        <img src={LinkedIn} alt="LinkedIn"
          className={styles.linkedin}
          onMouseEnter={handleLinkedinMouseEnter}
          onMouseLeave={handleLinkedinMouseLeave}
          style={{ transform: `scale(${linkedinImageScale})` }}
        />
        <img src={Line} alt="Line" className={styles.line} />
      </div>
      <div className={styles.main}>
        <p className={styles.titulo}>Hola, Soy</p>
        <p className={styles.name}>Yennyfer</p>
        <p className={styles.descripcion}>
          Desarrolladora Web | Diseñadora UX/UI | Freelancer
        </p>
        </div>
        <div className={styles.buttons}>
        <button
          className={styles.hireButton}
          onMouseEnter={handleHireMouseEnter}
          onMouseLeave={handleHireMouseLeave}
          style={{ transform: `scale(${hireButtonScale})` }}
        >
          CONTRÁTAME
        </button>
        <button
          className={styles.knowMoreButton}
          onMouseEnter={handleKnowMouseEnter}
          onMouseLeave={handleKnowMouseLeave}
          style={{ transform: `scale(${knowMoreButtonScale})` }}
        >SABER MÁS!</button>
      </div>
      <div className={styles.rightSection}>
      <img 
      src={imageDev} 
      alt="Tu Imagen" 
      className={styles.imageDev} />
      </div>
    </div>
  );
};

export default HomePage;
