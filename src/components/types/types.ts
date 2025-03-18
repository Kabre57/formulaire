export interface Technician {
  id: number;
  firstName: string;
  lastName: string;
  contact: string;
}

export interface MissionType {
  id: number;
  name: string;
}

// src/types/types.ts
export interface Mission {
  id: number;
  name: string;
  technicians: string[];
  site: string;
  type: string;
  start: string;
  end: string;
  status: string;
  notes: string;
}