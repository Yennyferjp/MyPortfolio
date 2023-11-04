import React from 'react';
import styles from './Footer.module.css';
import logoImage from '../../images/logoImage.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3 className={styles.title}>Creado por Yennyfer Jarava P ®</h3>
            <div className={styles.logo}>
                <img src={logoImage} alt='Web' className={styles.inlineImage} />
            </div>
        </div>
    );
};

export default Footer;
