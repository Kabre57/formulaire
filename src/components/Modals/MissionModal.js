import React from 'react';
import './Modals.css';

function MissionModal({ isOpen, onClose, mission }) {
  if (!isOpen || !mission) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Détails de la Mission</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mb-2"><strong>Technicien(s):</strong> {mission.technicians.join(', ')}</p>
            <p className="mb-2"><strong>Site:</strong> {mission.site}</p>
            <p className="mb-2"><strong>Mission:</strong> {mission.type}</p>
          </div>
          <div>
            <p className="mb-2"><strong>Début:</strong> {mission.start}</p>
            <p className="mb-2"><strong>Fin:</strong> {mission.end}</p>
            <p className="mb-2"><strong>Statut:</strong> {mission.status}</p>
          </div>
        </div>
        <div className="mb-4">
          <p><strong>Notes:</strong></p>
          <p className="italic">{mission.notes || 'Aucune note'}</p>
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <i className="fas fa-edit mr-2"></i>Modifier
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            <i className="fas fa-trash mr-2"></i>Supprimer
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            <i className="fas fa-check mr-2"></i>Terminer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MissionModal;