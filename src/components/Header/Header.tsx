import React from 'react';

interface HeaderProps {
  onToggleTheme: () => void;
  onNotificationClick: () => void;
  notificationCount: number;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, onNotificationClick, notificationCount }) => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <i className="ri-calendar-line text-2xl mr-2"></i>
          <h1 className="text-xl font-bold">Progitek Planning</h1>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-4">
            <li>
              <button className="nav-btn px-3 py-2 rounded-md hover:bg-white/20 transition-colors" data-tab="calendar">
                Calendrier
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;