import React from 'react';
import styles from './Workflow.module.css';

const Workflow = () => {
  return (
    <div className={styles.workflow}>
      <h2 className="text-2xl font-bold mb-4">Workflow</h2>
      <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Aucun workflow en cours.</p>
      </div>
    </div>
  );
};

export default Workflow;