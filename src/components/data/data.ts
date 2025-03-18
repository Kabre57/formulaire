// src/components/data/data.ts

import { Mission } from '../types/types'; // Modifier le chemin d'importation

export const initialMissions: Mission[] = [
    {
        id: 1,
        name: 'Mission 1',
        technicians: ['Technicien 1', 'Technicien 2'],
        site: 'Site A',
        type: 'Maintenance',
        start: '2023-10-01 09:00',
        end: '2023-10-01 17:00',
        status: 'En cours',
        notes: 'Mission de maintenance préventive',
    },
    // Ajoutez d'autres missions si nécessaire
];