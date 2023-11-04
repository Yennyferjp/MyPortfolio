import React from 'react';
import styles from './Skills.module.css';
import Line from '../../images/Line2.png';
import Css from './images/css.png';
import Figma from './images/figma.png';
import Html from './images/html.png';
import Javascript from './images/javascript.png';
import MongoDB from './images/mongodb.png';
import Node from './images/node-js.png';
import Reactjs from './images/reactjs.png';
import Git from './images/git.png';


const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>HABILIDADES TÉNICAS</h3>
      <img src={Line} alt='Designer' className={styles.lineImage} />
      <div>

        <div className={styles.skillsCard}>
          <div className={styles.service}>
            <h4 className={styles.titleH4}>Lenguaje</h4>
            <div className={styles.skillsUnit}>
              <img src={Javascript} alt='Javascript' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Javascript</p>
            </div>
          </div>
        </div>
        <div className={styles.skillsCard}>
          <div className={styles.service}>
            <h4 className={styles.titleH4}>Frontend</h4>
            <div className={styles.skillsUnit}>
              <img src={Html} alt='Html' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Html</p>
            </div>
            <div className={styles.skillsUnit}>
              <img src={Css} alt='Css' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Css</p>
            </div>
          </div>
        </div>
        
        <div className={styles.skillsCard}>
          <div className={styles.service}>
            <h4 className={styles.titleH4}>Base de Datos</h4>
            <div className={styles.skillsUnit}>
              <img src={MongoDB} alt='MongoDB' className={styles.inlineImage} />
              <p className={styles.paragraphP}>MongoDB</p>
            </div>
          </div>
        </div>
        <div className={styles.skillsCard}>
          <div className={styles.service}>
            <h4 className={styles.titleH4}>Frameworks</h4>
            <div className={styles.skillsUnit}>
              <img src={Reactjs} alt='Reactjs' className={styles.inlineImage} />
              <p className={styles.paragraphP}>React</p>
            </div>
            <div className={styles.skillsUnit}>
              <img src={Node} alt='Node' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Node.JS</p>
            </div>
          </div>
        </div>
        <div className={styles.skillsCard}>
          <div className={styles.service}>
            <h4 className={styles.titleH4}>Herramientas</h4>
            <div className={styles.skillsUnit}>
              <img src={Git} alt='Git' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Git</p>
            </div>
            <div className={styles.skillsUnit}>
              <img src={Figma} alt='Figma' className={styles.inlineImage} />
              <p className={styles.paragraphP}>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
