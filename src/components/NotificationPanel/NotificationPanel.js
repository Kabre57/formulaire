import React from 'react';
import './NotificationPanel.css';

function NotificationPanel({ notifications, isOpen, onClose }) {
  return (
    <div
      className={`fixed right-0 top-16 w-80 bg-white dark:bg-gray-800 border shadow-lg rounded-lg z-50 p-4 max-h-96 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">Notifications</h3>
        <button
          onClick={onClose} // Appel à onClose
          className="text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
        >
          &times; {/* Symbole de fermeture */}
        </button>
      </div>
      <div className="space-y-3">
        {notifications.length === 0 ? (
          <p className="text-gray-500 italic">Aucune notification</p>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-3 ${
                notif.read ? 'bg-gray-50' : 'bg-blue-50'
              } dark:${
                notif.read ? 'bg-gray-700' : 'bg-blue-900'
              } rounded mb-2`}
            >
              <div className="flex justify-between">
                <h4 className="font-semibold">{notif.title}</h4>
                <span className="text-xs text-gray-500">
                  {new Date(notif.date).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm">{notif.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationPanel;