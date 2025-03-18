import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Calendar from './components/Calendar';
import NotificationPanel from './components/NotificationPanel';
import LoadingOverlay from './components/LoadingOverlay';
import 'tailwindcss/tailwind.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNotifications([{ id: 1, message: "Bienvenue sur l'application !" }]);
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-6 flex-grow">
                <Tabs />
                <Calendar />
            </div>
            <NotificationPanel notifications={notifications} />
            {loading && <LoadingOverlay />}
        </div>
    );
};

export default App;