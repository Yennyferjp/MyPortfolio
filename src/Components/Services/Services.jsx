import React from 'react';
import styles from './Services.module.css';
import Designer from '../../images/designer.png';
import Web from '../../images/web.png';
import Line from '../../images/line3.png';

const Services = () => {
  return (
    <div className={styles.services}>
      <h3 className={styles.title}>SERVICIOS QUE OFREZCO</h3>
      <img src={Line} alt='Designer' className={styles.lineImage} />
      <div>
        
      <div className={styles.serviceCard}>
        <div className={styles.service}>
        <img src={Designer} alt='Designer' className={styles.inlineImage} />
        <h4 className={styles.titleH4}>Graphic Designing</h4>
          <p className={styles.paragraphP}>Tengo la capacidad de diseñar sitios web personalizados que se ajusten a las necesidades específicas de cada cliente.</p>
        </div>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.service}>
        <img src={Web} alt='Web' className={styles.inlineImage} />
        <h4 className={styles.titleH4}>Web Development</h4>
          <p className={styles.paragraphP}>Puedo desarrollar páginas web funcionales y atractivas con lenguajes de programación y herramientas de diseño web.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
