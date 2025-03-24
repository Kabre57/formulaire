
import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ViewMode } from '../../types/types';
import { technicians } from '../../data/mockData';

interface CalendarControlsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  selectedTechnician: string | 'all';
  setSelectedTechnician: (id: string | 'all') => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  onAddMission: () => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
  viewMode,
  setViewMode,
  selectedTechnician,
  setSelectedTechnician,
  selectedDate,
  setSelectedDate,
  onAddMission
}) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as ViewMode)}>
        <TabsList>
          <TabsTrigger value="day">Jour</TabsTrigger>
          <TabsTrigger value="week">Semaine</TabsTrigger>
          <TabsTrigger value="month">Mois</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <select 
        className="border rounded p-2"
        value={selectedTechnician}
        onChange={(e) => setSelectedTechnician(e.target.value)}
      >
        <option value="all">Tous les techniciens</option>
        <option value="dg">DG</option>
        {technicians.map(tech => (
          <option key={tech.id} value={tech.id}>
            {tech.firstName} {tech.lastName}
          </option>
        ))}
      </select>
      
      <Button variant="outline" onClick={onAddMission}>Ajouter Mission</Button>
    </div>
  );
};

export default CalendarControls;
