import React, { useState } from 'react';
import './Dashboard.css';
import { initialMissions } from '../data/data'; // Importer les missions initiales

interface Mission {
    id: number;
    name: string; // Inclure la propriété "name"
    technicians: string[];
    site: string;
    type: string;
    start: string;
    end: string;
    status: string;
    notes: string;
}

interface DashboardProps {
    openMissionModal: (mission: Mission) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ openMissionModal }) => {
    // Utiliser les missions initiales pour l'état
    const [missions, setMissions] = useState<Mission[]>(initialMissions);

    const addMission = () => {
        const newMission: Mission = {
            id: missions.length + 1,
            name: `Mission ${missions.length + 1}`, // Assurez-vous d'inclure un nom
            technicians: ['Nouveau Technicien'],
            site: 'Nouveau Site',
            type: 'Nouveau Type',
            start: '2023-10-02 09:00',
            end: '2023-10-02 17:00',
            status: 'À venir',
            notes: 'Nouvelle mission ajoutée',
        };
        setMissions((prevMissions) => [...prevMissions, newMission]);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4 no-print">
                <div className="flex items-center">
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 mr-2">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <h2 className="text-xl font-semibold">Semaine du 01/10/2023</h2>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 ml-2">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 ml-3">
                        Aujourd&apos;hui
                    </button>
                </div>
                <div className="flex">
                    <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center"
                        onClick={addMission}
                    >
                        <i className="fas fa-plus mr-2"></i>Ajouter Mission
                    </button>
                    <button className="ml-3 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 flex items-center">
                        <i className="fas fa-print mr-2"></i>Imprimer
                    </button>
                </div>
            </div>

            {/* Liste des missions */}
            <div className="space-y-2">
                {missions.map((mission) => (
                    <div
                        key={mission.id}
                        className="p-3 border rounded bg-gray-50 dark:bg-gray-700 cursor-pointer"
                        onClick={() => openMissionModal(mission)}
                    >
                        <p className="font-semibold">{mission.type}</p>
                        <p className="text-sm">{mission.site}</p>
                        <p className="text-xs text-gray-500">
                            {mission.start} - {mission.end}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;