import React from 'react';
import styles from './ContactMe.module.css';
import Line from '../../images/line3.png';
import Line2 from '../../images/Line5.png';

const ContactMe = () => {
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

        <div className={styles.div3}>
          <h2>Información de Contacto</h2>
          <p>Celular: Numero</p>
          <p>Email: correo</p>
          <p>Dirección: Colombia, Medellin, Antioquia</p>
          <p>Redes Sociales:</p>
          <div className={styles.redesSociales}>
            <img src="red_social_1.jpg" alt="Red Social 1" />
            <img src="red_social_2.jpg" alt="Red Social 2" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactMe;