
import React from 'react';
import { Mission } from '../../types/types';
import { technicians } from '../../data/mockData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DailyCalendarProps {
  missions: Mission[];
  selectedTechnician: string | 'all';
  selectedDate: Date;
}

const DailyCalendar: React.FC<DailyCalendarProps> = ({ 
  missions, 
  selectedTechnician,
  selectedDate 
}) => {
  const filteredMissions = missions.filter(mission => {
    const missionDate = new Date(mission.startTime);
    const isSameDate = missionDate.toDateString() === selectedDate.toDateString();
    
    return isSameDate && (
      selectedTechnician === 'all' || 
      mission.technicianIds.includes(selectedTechnician) ||
      (selectedTechnician === 'dg' && mission.includeDG)
    );
  });

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">
        {new Intl.DateTimeFormat('fr-FR', { 
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(selectedDate)}
      </h3>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Heure</TableHead>
            <TableHead>Mission</TableHead>
            <TableHead>Lieu</TableHead>
            <TableHead>Techniciens</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMissions.map((mission) => (
            <TableRow key={mission.id}>
              <TableCell>
                {new Date(mission.startTime).toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
                {' - '}
                {new Date(mission.endTime).toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </TableCell>
              <TableCell>{mission.title}</TableCell>
              <TableCell>{mission.location}</TableCell>
              <TableCell>
                {mission.technicianIds.map(id => {
                  const tech = technicians.find(t => t.id === id);
                  return tech ? `${tech.firstName} ${tech.lastName}, ` : '';
                })}
                {mission.includeDG && 'DG'}
              </TableCell>
              <TableCell>{mission.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Détails</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DailyCalendar;
