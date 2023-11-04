import React from 'react';
import styles from './WhatMeSay.module.css';
import Line from '../../images/line3.png';
import Leslie from '../../images/Less.png';
import Marcia from '../../images/Marcia.png';
import Tatiana from '../../images/Tati.png';

const Opinions = () => {
  return (
    <div className={styles.opinions}>
      <h3 className={styles.title}>QUÉ DICEN DE MI...</h3>
      <img src={Line} alt="Línea decorativa" className={styles.lineImage} />

      <div className={styles.opinionSection}>
        <div className={styles.opinionLeft}>
          <p className={styles.paragraph}>
            <span className={styles.imageWrapper}>
              <img src={Leslie} alt="Leslie" className={styles.imageLeft} />
            </span>
            Leslie Garabay
          </p>
          <p className={styles.textCenter}>
            "Yenn es una persona súper inteligente y capaz. La admiro por su profesionalismo y su habilidad para identificar y resolver problemas. Además, es una persona muy empática y resiliente; sé que puede lograr todo lo que se proponga porque es muy valiente y determinada. Tuve la oportunidad y el honor de trabajar con ella en dos proyectos, y sin duda mi proceso de aprendizaje se vio altamente enriquecido al colaborar a su lado."
          </p>
          <div className={styles.opinionMarcia}>
          <p className={styles.paragraph}>
            <span className={styles.imageWrapper}>
              <img src={Marcia} alt="Leslie" className={styles.imageLeft} />
            </span>
            Marcia Millanao
          </p><p className={styles.textCenter}>
              "Se nota que le gusta desarrollar soluciones a problemas, además de ir buscando mejoras constantes en lo que desarrolla, abierta a recibir feedback y de esta forma poder aplicarlo."
            </p>
          </div>
        </div>

        <div className={styles.opinionRight}>
          <div className={styles.opinionMarcia}>
          <p className={styles.paragraph}>
            <span className={styles.imageWrapper}>
              <img src={Marcia} alt="Leslie" className={styles.imageLeft} />
            </span>
            Marcia Millanao
          </p><p className={styles.textCenter}>
              "Se nota que le gusta desarrollar soluciones a problemas, además de ir buscando mejoras constantes en lo que desarrolla, abierta a recibir feedback y de esta forma poder aplicarlo."
            </p>
          </div>
          <div className={styles.opinionMarcia}>
          <p className={styles.paragraph}>
            <span className={styles.imageWrapper}>
              <img src={Tatiana} alt="Leslie" className={styles.imageLeft} />
            </span>
            Tatiana Hernandez
          </p>
            <p className={styles.textCenter}>
              "Logra sobrellevar los desafíos de aprendizaje propuestos, tiene buena comunicación y en la forma en que se organizó desde un inicio."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
