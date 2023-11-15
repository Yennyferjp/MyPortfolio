import React from 'react';
import styles from './Projects.module.css';
import Line from '../../images/Line2.png';
import CipherPrivate from '../../images/cipherPrivate.png';
import DataLover from '../../images/dataLover.png';
import VeganBook from '../../images/veganBook.png';
import MdLink from '../../images/mdLink.png';

const Projects = () => {
  return (
    <div 
    id={'proyects'}
    className={styles.projects}>
      <h3 className={styles.title}>MIS PROYECTOS </h3>
      <img src={Line} alt='Línea decorativa' className={styles.lineImage} />
      
      <div>
        
      <div className={styles.projectCard}>
        <div className={styles.service}>
        <img src={CipherPrivate} alt='Cipher Private' className={styles.projectImage} />
        <h4 className={styles.titleH4}>Cipher Private</h4>
          <p className={styles.paragraphP}> Es una herramienta gratuita para cifrar y descifrar mensajes de texto utilizando el algoritmo de cifrado César. La página web cuenta con una descripción de la herramienta y sus usos, así como instrucciones sobre cómo utilizarla.</p>
          <button className={styles.verMasButton}>Ver Proyecto</button>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.service}>
        <img src={DataLover} alt='Data Lover' className={styles.projectImage} />
        <h4 className={styles.titleH4}>Data Lover</h4>
          <p className={styles.paragraphP}>Esta es una aplicación web para un restaurante de comida saludable que permite a los usuarios ver los menús e información del restaurante. Facilita la búsqueda de platos y su filtrado por categorías de productos.</p>
          <button className={styles.verMasButton}>Ver Proyecto</button>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.service}>
        <img src={VeganBook} alt='Vegan Book' className={styles.projectImage} />
        <h4 className={styles.titleH4}>Vegan Book</h4>
          <p className={styles.paragraphP}>Mediante el pair programming, creamos una red social inclusiva para la comunidad vegana, donde los usuarios comparten contenido sobre veganismo: consejos, productos éticos, recetas, noticias y eventos.</p>
          <button className={styles.verMasButton}>Ver Proyecto</button>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.service}>
        <img src={MdLink} alt='Md Link' className={styles.projectImage} />
        <h4 className={styles.titleH4}>Md Link</h4>
          <p className={styles.paragraphP}>Imagínese una herramienta minuciosa que explora sus archivos Markdown en busca de enlaces, los evalúa a fondo y le proporciona un informe detallado sobre su validez y estado. ¡Diga adiós a los enlaces rotos que empañan su contenido!</p>
          <button className={styles.verMasButton}>Ver Proyecto</button>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Projects;
