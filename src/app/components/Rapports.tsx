'use client';

import React from 'react';

const Rapports = () => {
    return (
        <section id="reports" className="tab-content hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Rapports et Statistiques</h2>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <select id="reportType" className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base">
                        <option value="technician">Par Technicien</option>
                        <option value="commercial">Par Commercial</option>
                        <option value="site">Par Site</option>
                        <option value="mission">Par Type de Mission</option>
                    </select>
                    <button id="generateReportBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                        <i className="ri-file-chart-line mr-2"></i> Générer
                    </button>
                    <button id="printReportBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                        <i className="ri-printer-line mr-2"></i> Imprimer
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                <div id="reportFilters" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="form-group">
                        <label className="block mb-2 font-semibold">Période</label>
                        <select id="reportPeriod" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base">
                            <option value="week">Cette semaine</option>
                            <option value="lastWeek">Semaine dernière</option>
                            <option value="month">Ce mois</option>
                            <option value="custom">Personnalisé</option>
                        </select>
                    </div>
                    
                    <div id="dateRangeContainer" className="form-group hidden">
                        <label className="block mb-2 font-semibold">Dates</label>
                        <div className="flex space-x-2">
                            <input type="date" id="startDate" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base" />
                            <input type="date" id="endDate" className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base" />
                        </div>
                    </div>
                    
                    <div id="reportFilterSpecific" className="form-group">
                        {/* Remplissage dynamique selon le type de rapport */}
                    </div>
                </div>
                
                <div id="reportResults" className="mt-6">
                    <div id="reportChart" className="h-64 mb-6">
                        {/* Graphique sera rendu ici */}
                    </div>
                    
                    <div id="reportTable" className="overflow-x-auto">
                        {/* Tableau sera rendu ici */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rapports;