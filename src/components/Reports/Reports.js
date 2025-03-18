import React from 'react';
import './Reports.css';

function Reports() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Rapports et Statistiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Total des Missions</h3>
          <p className="text-3xl font-bold text-indigo-600">0</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Sites Visités</h3>
          <p className="text-3xl font-bold text-indigo-600">0</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Missions cette Semaine</h3>
          <p className="text-3xl font-bold text-indigo-600">0</p>
        </div>
      </div>
      {/* Report generation logic here */}
    </div>
  );
}

export default Reports;