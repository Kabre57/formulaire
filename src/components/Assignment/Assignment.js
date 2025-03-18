import React from 'react';
import styles from './Assignment.module.css';

const Assignment = () => {
  return (
    <div className={styles.assignment}>
      <h2 className="text-2xl font-bold mb-4">Assignation des missions</h2>
      <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Aucune mission à assigner pour le moment.</p>
      </div>
    </div>
  );
};

export default Assignment;