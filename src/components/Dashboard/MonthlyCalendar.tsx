
import React from 'react';
import { Calendar } from "@/components/ui/calendar";

interface MonthlyCalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex justify-center mb-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && setSelectedDate(date)}
        className="rounded-md border"
      />
    </div>
  );
};

export default MonthlyCalendar;
