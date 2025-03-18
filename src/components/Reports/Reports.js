import React from 'react';
import styles from './Reports.module.css';

const Reports = () => {
  return (
    <div className={styles.reports}>
      <h2 className="text-2xl font-bold mb-4">Rapports</h2>
      <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Aucun rapport disponible pour le moment.</p>
      </div>
    </div>
  );
};

export default Reports;