import React, { useState } from 'react';
import styles from './ContactMe.module.css';
import Line from '../../images/line3.png';
import Line2 from '../../images/Line5.png';
import LinkedIn from '../../images/mdi_linkedin.png';
import GitHub from '../../images/github.png';

const ContactMe = () => {
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
    <div className={styles.contactMe}>
      <h3 className={styles.title}>CONTÁCTAME</h3>
      <img src={Line} alt='Designer' className={styles.inlineImage} />
      <div className={styles.contactMeForm}>
        <div className={styles.div1}>
          <div className={styles.inputContainer}>
            <div className={styles.inputField}>
              <input type="text" id="nombres" name="nombres" className={styles.inputStyle} placeholder="Nombres" />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputField}>
              <input type="email" id="email" name="email" className={styles.inputStyle} placeholder="Email" />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputField}>
              <textarea id="mensaje" name="mensaje" rows="4" cols="50" className={styles.inputStyle} placeholder="Mensaje"></textarea>
            </div>
          </div>

          <button id="enviar" className={styles.enviarButton}>Enviar</button>
        </div>


        <div className={styles.div2}>
          <img src={Line2} alt='Linea' className={styles.inlineImage2} />

        </div>

        <div className={styles.contactInfo}>
          <p className={styles.contactTittle}>Teléfono</p> 
          <p className={styles.contactDescription}>+57 323 816 5367</p> 
          <p className={styles.contactTittle}>Email</p>
          <p className={styles.contactDescription}>yennyfer.jarava92@gmail.com</p> 
          <p className={styles.contactTittle}>Dirección</p>
          <p className={styles.contactDescription}>Colombia,
          <br />Medellín, Antioquia</p> 
          <p className={styles.contactTittle}>Redes Sociales</p>
          <div className={styles.redesSociales}>
         
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
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactMe;