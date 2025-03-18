import React from 'react';
import { Mission } from 'components/types//types'; // Importez le type Mission

interface DashboardProps {
  openMissionModal: (mission: Mission) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ openMissionModal }) => {
  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold mb-4">Tableau de bord</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-dark-light p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Missions en cours</h3>
          <p className="text-gray-500 dark:text-gray-400">5 missions</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;