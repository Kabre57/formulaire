'use client';

import React from 'react';

const Parametres = () => {
    return (
        <section id="settings" className="tab-content hidden">
            <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Gestion des Techniciens</h3>
                    <div className="mb-4 flex">
                        <button id="addTechnicianBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                            <i className="ri-user-add-line mr-2"></i> Ajouter
                        </button>
                    </div>
                    <div id="techniciansList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
                
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Gestion des Commerciaux</h3>
                    <div className="mb-4 flex">
                        <button id="addCommercialBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                            <i className="ri-user-add-line mr-2"></i> Ajouter
                        </button>
                    </div>
                    <div id="commercialsList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
                
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Sites d'Intervention</h3>
                    <div className="mb-4 flex">
                        <button id="addSiteBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                            <i className="ri-map-pin-add-line mr-2"></i> Ajouter
                        </button>
                    </div>
                    <div id="sitesList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
                
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Types de Missions</h3>
                    <div className="mb-4 flex">
                        <button id="addMissionTypeBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                            <i className="ri-add-line mr-2"></i> Ajouter
                        </button>
                    </div>
                    <div id="missionTypesList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parametres;