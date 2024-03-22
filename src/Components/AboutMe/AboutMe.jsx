import React, { useState } from 'react';
import styles from './AboutMe.module.css';
import Yennyfer from '../../images/imagesYennyfer.png';
import GitHub from '../../images/_github.png';
import LinkedIn from '../../images/_linkedin.png';

const AboutMe = () => {

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
    id= {'aboutme'} className={styles.AboutMe}>
      <div className={styles.leftSection}>
        <img 
        src={Yennyfer} alt='Foto Yennyfer' />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.titulo}><h3 className={styles.title}>About Me</h3></div>
        
        <p className={styles.paragraph}>
          Soy una apasionada Desarrolladora Web con experiencia en administración de empresas. Mi viaje en el desarrollo web comenzó con el deseo de explorar un campo en constante evolución. Me dedico a crear soluciones innovadoras que mejoran la experiencia en línea de los usuarios. Con una sólida base en gestión de proyectos y una mentalidad orientada a resultados, abordo cada desafío con pasión.
          <br /><br />Mi objetivo principal es proporcionar soluciones tecnológicas de alta calidad que agreguen valor. Creo en la importancia de la colaboración y la creatividad para lograr resultados excepcionales. Estoy emocionada por el futuro en el desarrollo web y espero contribuir de manera significativa a esta comunidad en crecimiento.
          <br /><br />¡Gracias por visitar mi perfil! 
          
          

            <div className={styles.imagenes}>
            <img
              src={GitHub}
              alt='GitHub'
              className={styles.inlineImage}
              onMouseEnter={handleGithubMouseEnter}
              onMouseLeave={handleGithubMouseLeave}
              style={{ transform: `scale(${githubImageScale})` }}
            />
            <img
              src={LinkedIn}
              alt='LinkedIn'
              className={styles.inlineImage}
              onMouseEnter={handleLinkedinMouseEnter}
              onMouseLeave={handleLinkedinMouseLeave}
              style={{ transform: `scale(${linkedinImageScale})` }}
            />
</div>
        </p>


      </div>
    </div>
  );
};

export default AboutMe;
