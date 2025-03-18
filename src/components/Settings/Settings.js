import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Paramètres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
          <h3 className="font-semibold text-lg mb-3">Gestion des Techniciens</h3>
          <form className="mb-4">
            <div className="mb-3">
              <label className="block mb-1">Nom et Prénom</label>
              <input
                type="text"
                className="px-3 py-2 border rounded w-full text-base"
                placeholder="Nom et prénom du technicien"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Ajouter Technicien
            </button>
          </form>
          <div className="space-y-2">
            {/* Technicians list */}
          </div>
        </div>
        <div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold text-lg mb-3">Gestion des Types de Missions</h3>
            <form className="mb-4">
              <div className="mb-3">
                <label className="block mb-1">Type de Mission</label>
                <input
                  type="text"
                  className="px-3 py-2 border rounded w-full text-base"
                  placeholder="Nom de la mission"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Ajouter Type
              </button>
            </form>
            <div className="space-y-2">
              {/* Mission types list */}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-3">Gestion des Sites</h3>
            <form className="mb-4">
              <div className="mb-3">
                <label className="block mb-1">Nom du Site</label>
                <input
                  type="text"
                  className="px-3 py-2 border rounded w-full text-base"
                  placeholder="Nom du site"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Ajouter Site
              </button>
            </form>
            <div className="space-y-2">
              {/* Sites list */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;