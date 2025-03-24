
export interface Technician {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  technicianIds: string[];
  includeDG: boolean;
  status: MissionStatus;
  comments?: {
    dg?: string;
    bogui?: string;
    pdg?: string;
  };
}

export type MissionStatus = 
  | 'planned' 
  | 'in-progress' 
  | 'completed' 
  | 'dg-pending' 
  | 'dg-approved' 
  | 'dg-rejected' 
  | 'bogui-pending' 
  | 'bogui-approved' 
  | 'bogui-rejected' 
  | 'pdg-pending' 
  | 'pdg-approved' 
  | 'pdg-rejected';

export interface WeeklyReport {
  weekId: string;
  weekStart: string;
  weekEnd: string;
  technicianId: string;
  missions: Mission[];
  totalHours: number;
  status: ReportStatus;
}

export type ReportStatus = 
  | 'draft' 
  | 'submitted' 
  | 'dg-approved' 
  | 'bogui-approved' 
  | 'pdg-approved' 
  | 'rejected';

export interface UserRole {
  id: string;
  name: 'technician' | 'dg' | 'bogui' | 'pdg' | 'admin';
}

export type ViewMode = 'day' | 'week' | 'month';
