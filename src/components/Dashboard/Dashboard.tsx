
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mission, ViewMode } from '../../types/types';
import { generateWeeklyMissions } from '../../data/mockData';
import MissionModal from '../MissionModal/MissionModal';
import { toast } from "sonner";
import CalendarHeader from './CalendarHeader';
import CalendarControls from './CalendarControls';
import MonthlyCalendar from './MonthlyCalendar';
import WeeklyCalendar from './WeeklyCalendar';
import DailyCalendar from './DailyCalendar';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [missions, setMissions] = useState<Mission[]>([]);
  const [selectedTechnician, setSelectedTechnician] = useState<string | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  useEffect(() => {
    const weekStart = getWeekStart(selectedDate);
    const weeklyMissions = generateWeeklyMissions(weekStart);
    setMissions(weeklyMissions);
  }, [selectedDate]);

  const handleAddMission = (newMission: Omit<Mission, 'id'>) => {
    const missionWithId: Mission = {
      ...newMission,
      id: `mission-${Date.now()}`,
    };
    
    setMissions(prevMissions => [...prevMissions, missionWithId]);
    setIsModalOpen(false);
    toast.success("Mission ajoutée avec succès !");
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CalendarHeader 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate}
          viewMode={viewMode}
        />
        <CardContent>
          <CalendarControls 
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedTechnician={selectedTechnician}
            setSelectedTechnician={setSelectedTechnician}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            onAddMission={() => setIsModalOpen(true)}
          />
          
          {viewMode === 'month' && (
            <MonthlyCalendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
          
          {viewMode === 'week' && (
            <WeeklyCalendar
              missions={missions}
              selectedTechnician={selectedTechnician}
              selectedDate={selectedDate}
            />
          )}
          
          {viewMode === 'day' && (
            <DailyCalendar
              missions={missions}
              selectedTechnician={selectedTechnician}
              selectedDate={selectedDate}
            />
          )}
        </CardContent>
      </Card>

      <MissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleAddMission}
      />
    </div>
  );
};

export default Dashboard;
