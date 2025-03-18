import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Progitek. Tous droits réservés.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Conçu avec ❤️ par l'équipe Progitek.
        </p>
      </div>
    </footer>
  );
};

export default Footer;