'use client';

import React from 'react';

const Missions = () => {
    return (
        <section id="missions" className="tab-content">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Missions</h2>
                <div className="flex space-x-2">
                    <button id="addMissionBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                        <i className="ri-add-line mr-2"></i> Nouvelle Mission
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Missions en cours</h3>
                    <div id="currentMissionsList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
                
                <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Missions à venir</h3>
                    <div id="upcomingMissionsList" className="space-y-3">
                        {/* Remplissage dynamique par JavaScript */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Missions;