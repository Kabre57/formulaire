// src/app/page.tsx
'use client'; // Ajoutez cette ligne en haut du fichier

import Header from './components/Header';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Missions from './components/Missions';
import Rapports from './components/Rapports';
import Validations from './components/Validations';
import Parametres from './components/Parametres';
import { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('calendar'); // État pour gérer l'onglet actif

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'calendar':
                return <Calendar />;
            case 'missions':
                return <Missions />;
            case 'reports':
                return <Rapports />;
            case 'validations':
                return <Validations />;
            case 'settings':
                return <Parametres />;
            default:
                return <Calendar />;
        }
    };

    return (
        <div className="app-container bg-light dark:bg-dark text-gray-800 dark:text-gray-200">
            <Header setActiveTab={setActiveTab} />
            <main className="flex-grow container mx-auto px-4 py-6">
                {renderActiveTab()}
            </main>
            <Footer />
        </div>
    );
};

export default Page;