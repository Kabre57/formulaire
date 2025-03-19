'use client';

import React from 'react';

const Validations = () => {
    return (
        <section id="validations" className="tab-content hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Validation des Fiches</h2>
                <div className="flex space-x-2">
                    <select id="validationFilter" className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base">
                        <option value="pending">En attente</option>
                        <option value="validated">Validées</option>
                        <option value="rejected">Rejetées</option>
                        <option value="all">Toutes</option>
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                <div id="validationsList" className="space-y-4">
                    {/* Remplissage dynamique par JavaScript */}
                </div>
            </div>
        </section>
    );
};

export default Validations;