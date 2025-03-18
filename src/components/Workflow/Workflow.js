import React from 'react';
import './Workflow.css';

function Workflow() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Workflow de Validation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-3">Fiches en attente de validation</h3>
          <div className="space-y-3">
            <p className="text-gray-500 italic">Aucune fiche en attente</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-3">Historique des validations</h3>
          <div className="space-y-3">
            <p className="text-gray-500 italic">Aucun historique disponible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;