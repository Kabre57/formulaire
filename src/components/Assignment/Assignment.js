import React, { useState } from 'react';
import './Assignment.css';

function Assignment() {
  const [technicians, setTechnicians] = useState([{ id: '', name: '' }]);

  const addTechnicianRow = () => {
    setTechnicians([...technicians, { id: '', name: '' }]);
  };

  const removeTechnicianRow = (index) => {
    const newTechnicians = technicians.filter((_, i) => i !== index);
    setTechnicians(newTechnicians);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Gestion des Missions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-3">Ajouter une Mission</h3>
          <form className="space-y-3">
            <div>
              <label className="block mb-1">Technicien(s)*</label>
              {technicians.map((tech, index) => (
                <div key={index} className="technician-select-row flex items-center mb-2">
                  <select
                    className="px-3 py-2 border rounded w-full text-base"
                    required
                  >
                    <option value="">Sélectionner un technicien</option>
                    {/* Populate dynamically */}
                  </select>
                  {index === 0 ? (
                    <button
                      type="button"
                      onClick={addTechnicianRow}
                      className="ml-2 px-2 py-2 bg-green-600 text-white rounded"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => removeTechnicianRow(index)}
                      className="ml-2 px-2 py-2 bg-red-600 text-white rounded"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
            {/* Other form fields */}
          </form>
        </div>
        <div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold text-lg mb-3">Missions en cours</h3>
            <div className="space-y-2">
              <p className="text-gray-500 italic">Aucune mission en cours</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-3">Missions à venir</h3>
            <div className="space-y-2">
              <p className="text-gray-500 italic">Aucune mission à venir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;