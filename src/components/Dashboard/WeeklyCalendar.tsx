
import React from 'react';
import { Mission, Technician } from '../../types/types';
import MissionItem from '../MissionItem/MissionItem';

interface WeeklyCalendarProps {
  missions: Mission[];
  selectedTechnician: string | 'all';
  selectedDate: Date;
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({ 
  missions, 
  selectedTechnician,
  selectedDate
}) => {
  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };
  
  const hours = Array.from({ length: 11 }, (_, i) => i + 8);
  
  const getWeekDays = () => {
    const weekStart = getWeekStart(selectedDate);
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      return day;
    });
  };
  
  const weekDays = getWeekDays();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { 
      weekday: 'short', 
      day: 'numeric',
      month: 'short'
    }).format(date);
  };

  const filteredMissions = missions.filter(mission => 
    selectedTechnician === 'all' || 
    mission.technicianIds.includes(selectedTechnician) ||
    (selectedTechnician === 'dg' && mission.includeDG)
  );

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b">
          <div className="p-2 font-medium text-center">Heures</div>
          {weekDays.map((day, i) => (
            <div key={i} className="p-2 font-medium text-center">
              {formatDate(day)}
            </div>
          ))}
        </div>
        
        <div className="relative">
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-[80px_repeat(7,1fr)] border-b">
              <div className="p-2 text-center border-r">{hour}:00</div>
              {weekDays.map((day, dayIndex) => (
                <div key={dayIndex} className="h-16 border-r relative"></div>
              ))}
            </div>
          ))}
          
          {filteredMissions.map((mission) => {
            const startDate = new Date(mission.startTime);
            const endDate = new Date(mission.endTime);
            
            const startHour = startDate.getHours() + startDate.getMinutes() / 60;
            const endHour = endDate.getHours() + endDate.getMinutes() / 60;
            const duration = endHour - startHour;
            
            const dayOfWeek = startDate.getDay();
            const adjustedDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
            
            const weekStart = getWeekStart(selectedDate);
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            
            if (startDate >= weekStart && startDate <= weekEnd) {
              const top = (startHour - 8) * 64;
              const height = duration * 64;
              
              return (
                <div
                  key={mission.id}
                  className="absolute bg-blue-100 border border-blue-300 rounded p-1 overflow-hidden"
                  style={{
                    top: `${top}px`,
                    height: `${height}px`,
                    left: `${80 + adjustedDayOfWeek * (100 / 7)}%`,
                    width: `${100 / 7 - 1}%`,
                  }}
                >
                  <MissionItem mission={mission} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;
