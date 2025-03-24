
import React from 'react';
import { Mission } from '../../types/types';
import { technicians } from '../../data/mockData';

interface MissionItemProps {
  mission: Mission;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission }) => {
  // Convertir les heures pour affichage
  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Obtenir les noms des techniciens
  const getTechnicianNames = () => {
    return mission.technicianIds.map(id => {
      const tech = technicians.find(t => t.id === id);
      return tech ? `${tech.firstName} ${tech.lastName}` : '';
    }).filter(Boolean).join(', ');
  };

  // Couleur en fonction du statut
  const getStatusColor = () => {
    switch (mission.status) {
      case 'planned':
        return 'bg-blue-100 border-blue-300';
      case 'in-progress':
        return 'bg-yellow-100 border-yellow-300';
      case 'completed':
        return 'bg-green-100 border-green-300';
      case 'dg-pending':
      case 'bogui-pending':
      case 'pdg-pending':
        return 'bg-purple-100 border-purple-300';
      case 'dg-approved':
      case 'bogui-approved':
      case 'pdg-approved':
        return 'bg-green-100 border-green-300';
      case 'dg-rejected':
      case 'bogui-rejected':
      case 'pdg-rejected':
        return 'bg-red-100 border-red-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className={`text-xs h-full ${getStatusColor()}`}>
      <div className="font-semibold truncate">{mission.title}</div>
      <div className="truncate">{formatTime(mission.startTime)} - {formatTime(mission.endTime)}</div>
      <div className="truncate">{mission.location}</div>
      <div className="truncate">
        {getTechnicianNames()}
        {mission.includeDG && (getTechnicianNames() ? ', DG' : 'DG')}
      </div>
    </div>
  );
};

export default MissionItem;
