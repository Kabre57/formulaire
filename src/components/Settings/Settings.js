import React from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h2 className="text-2xl font-bold mb-4">Paramètres</h2>
      <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Aucun paramètre à modifier pour le moment.</p>
      </div>
    </div>
  );
};

export default Settings;