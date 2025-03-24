
import React from 'react';
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ViewMode } from '../../types/types';

interface CalendarHeaderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  viewMode: ViewMode;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  selectedDate, 
  setSelectedDate,
  viewMode
}) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Planning des Techniciens</CardTitle>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" onClick={() => setSelectedDate(new Date())}>
          Aujourd'hui
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          const newDate = new Date(selectedDate);
          newDate.setDate(newDate.getDate() - (viewMode === 'day' ? 1 : 7));
          setSelectedDate(newDate);
        }}>
          Précédent
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          const newDate = new Date(selectedDate);
          newDate.setDate(newDate.getDate() + (viewMode === 'day' ? 1 : 7));
          setSelectedDate(newDate);
        }}>
          Suivant
        </Button>
      </div>
    </CardHeader>
  );
};

export default CalendarHeader;
