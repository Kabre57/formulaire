'use client'; // Ajoutez cette ligne en haut du fichier

import React, { useEffect, useState } from 'react';

const Calendar = () => {
    const [weekDates, setWeekDates] = useState<Date[]>([]);
    
    const getWeekDates = (date: Date) => {
        const result: Date[] = [];
        const current = new Date(date);
        current.setDate(current.getDate() - current.getDay() + 1); // Commencer par lundi

        for (let i = 0; i < 7; i++) {
            result.push(new Date(current)); // Pousser le nouvel objet Date
            current.setDate(current.getDate() + 1);
        }

        return result;
    };

    useEffect(() => {
        const today = new Date();
        setWeekDates(getWeekDates(today));
    }, []);

    return (
        <section id="calendar" className="tab-content">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Calendrier Hebdomadaire</h2>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <select id="weekSelector" className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-dark-light text-base">
                        {/* Options pour le sélecteur de semaine */}
                        {weekDates.map((date, index) => (
                            <option key={index} value={date.toISOString()}>
                                {date.toLocaleDateString('fr-FR')} - {new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR')}
                            </option>
                        ))}
                    </select>
                    <button id="printCalendarBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                        <i className="ri-printer-line mr-2"></i> Imprimer
                    </button>
                    <button id="addEventBtn" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center">
                        <i className="ri-add-line mr-2"></i> Ajouter
                    </button>
                </div>
            </div>

            <div className="calendar-container overflow-x-auto bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
                <div className="calendar-header grid grid-cols-8 border-b dark:border-gray-700 font-semibold">
                    <div className="px-2 py-3 text-center">Horaire</div>
                    <div className="px-2 py-3 text-center">Lundi</div>
                    <div className="px-2 py-3 text-center">Mardi</div>
                    <div className="px-2 py-3 text-center">Mercredi</div>
                    <div className="px-2 py-3 text-center">Jeudi</div>
                    <div className="px-2 py-3 text-center">Vendredi</div>
                    <div className="px-2 py-3 text-center">Samedi</div>
                    <div className="px-2 py-3 text-center">Dimanche</div>
                </div>
                <div id="calendarBody" className="calendar-body">
                    {Array.from({ length: 12 }, (_, hour) => (
                        <div key={hour} className="grid grid-cols-8 border-b dark:border-gray-700">
                            <div className="px-2 py-3 text-center border-r dark:border-gray-700">
                                {hour + 8}:00
                            </div>
                            {weekDates.map((date, index) => (
                                <div key={index} className="px-1 py-2 relative min-h-[60px] border-r dark:border-gray-700" data-date={date.toISOString()}>
                                    {/* Logique pour afficher les missions peut être ajoutée ici */}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Calendar;