// types.ts

export interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface Mission {
  id: number;
  name: string; // Assurez-vous que cette propriété est incluse
  technicians: string[];
  site: string;
  type: string;
  start: string;
  end: string;
  status: string;
  notes: string;
}