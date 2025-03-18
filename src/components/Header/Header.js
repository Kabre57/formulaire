import React from 'react';
import './Header.css';

function Header({ onToggleTheme, onNotificationClick, notificationCount }) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Progitek Planning</h1>
        <div className="flex items-center">
          <button
            onClick={onToggleTheme}
            className="mr-3 p-2 rounded-full hover:bg-indigo-500 transition-colors"
          >
            <i className="fas fa-moon"></i>
          </button>
          <div className="ml-2 flex">
            <button
              onClick={onNotificationClick}
              className="p-2 rounded-full hover:bg-indigo-500 transition-colors relative"
            >
              <i className="fas fa-bell"></i>
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;