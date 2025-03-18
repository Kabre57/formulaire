import React from 'react';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs">
      <button onClick={() => onTabChange('dashboard')}>Dashboard</button>
      <button onClick={() => onTabChange('assignment')}>Assignment</button>
      {/* Ajoutez d'autres onglets ici */}
    </div>
  );
};

export default Tabs;