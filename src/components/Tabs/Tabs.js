import React from 'react';
import './Tabs.css';

function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'dashboard', icon: 'fa-calendar-alt', label: 'Calendrier' },
    { id: 'assignment', icon: 'fa-tasks', label: 'Missions' },
    { id: 'reports', icon: 'fa-file-alt', label: 'Rapports' },
    { id: 'workflow', icon: 'fa-check-circle', label: 'Validations' },
    { id: 'settings', icon: 'fa-cog', label: 'Paramètres' },
  ];

  return (
    <div className="mb-5 border-b no-print">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`tab-btn inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === tab.id
                  ? 'border-indigo-600'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <i className={`fas ${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;