
import { Technician, Mission, UserRole, MissionStatus } from '../types/types';

export const technicians: Technician[] = [
  { id: '1', firstName: 'Jean', lastName: 'Dupont' },
  { id: '2', firstName: 'Marie', lastName: 'Martin' },
  { id: '3', firstName: 'Pierre', lastName: 'Durand' },
  { id: '4', firstName: 'Sophie', lastName: 'Lefebvre' },
];

export const roles: UserRole[] = [
  { id: '1', name: 'technician' },
  { id: '2', name: 'dg' },
  { id: '3', name: 'bogui' },
  { id: '4', name: 'pdg' },
  { id: '5', name: 'admin' },
];

export const missions: Mission[] = [
  {
    id: '1',
    title: 'Maintenance serveurs',
    description: 'Mise à jour et maintenance des serveurs',
    location: 'Site A',
    startTime: '2024-07-01T09:30:00',
    endTime: '2024-07-01T17:00:00',
    technicianIds: ['1', '2'],
    includeDG: true,
    status: 'planned',
  },
  {
    id: '2',
    title: 'Installation réseau',
    description: 'Installation d\'un nouveau réseau',
    location: 'Site B',
    startTime: '2024-07-02T08:00:00',
    endTime: '2024-07-02T16:00:00',
    technicianIds: ['3'],
    includeDG: false,
    status: 'planned',
  },
  {
    id: '3',
    title: 'Dépannage système',
    description: 'Résolution de problèmes système',
    location: 'Site C',
    startTime: '2024-07-03T10:00:00',
    endTime: '2024-07-03T18:00:00',
    technicianIds: ['4', '1'],
    includeDG: false,
    status: 'in-progress',
  },
];

// Fonction pour générer des missions pour la semaine
export const generateWeeklyMissions = (weekStart: Date): Mission[] => {
  const result: Mission[] = [];
  const statuses: MissionStatus[] = ['planned', 'in-progress', 'completed', 'dg-pending'];
  
  for (let i = 0; i < 15; i++) {
    const day = new Date(weekStart);
    day.setDate(day.getDate() + Math.floor(i / 3));
    
    const startHour = 8 + Math.floor(Math.random() * 4);
    const duration = 2 + Math.floor(Math.random() * 6);
    
    const startTime = new Date(day);
    startTime.setHours(startHour, Math.random() > 0.5 ? 30 : 0);
    
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + duration);
    
    const techCount = 1 + Math.floor(Math.random() * 3);
    const techIds: string[] = [];
    
    for (let j = 0; j < techCount; j++) {
      const randomTech = technicians[Math.floor(Math.random() * technicians.length)].id;
      if (!techIds.includes(randomTech)) {
        techIds.push(randomTech);
      }
    }
    
    result.push({
      id: `generated-${i}`,
      title: `Mission ${i + 1}`,
      description: `Description de la mission ${i + 1}`,
      location: `Site ${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      technicianIds: techIds,
      includeDG: Math.random() > 0.7,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  
  return result;
};
