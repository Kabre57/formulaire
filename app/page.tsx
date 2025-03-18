'use client';

import React, { useState } from 'react';
import Header from '../src/components/Header/Header';
import Tabs from '../src/components/Tabs/Tabs';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Assignment from '../src/components/Assignment/Assignment';
import Reports from '../src/components/Reports/Reports';
import Workflow from '../src/components/Workflow/Workflow';
import Settings from '../src/components/Settings/Settings';
import NotificationPanel from '../src/components/NotificationPanel/NotificationPanel';
import LoadingOverlay from '../src/components/LoadingOverlay/LoadingOverlay';
import MissionModal from '../src/components/Modals/MissionModal';
import ConfirmModal from '../src/components/Modals/ConfirmModal';
import CommentModal from '../src/components/Modals/CommentModal';
import './globals.css';

interface Notification {
    id: number;
    title: string;
    message: string;
    date: string;
    read: boolean;
}

interface Mission {
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

export default function Home() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [notifications, setNotifications] = useState<Notification[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false); // À utiliser dans une future implémentation
    
    const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
    const [confirmAction, setConfirmAction] = useState<(() => void) | null>(null);

    const showNotification = (title: string, message: string) => {
        const newNotification: Notification = {
            id: Date.now(),
            title,
            message,
            date: new Date().toISOString(),
            read: false,
        };
        setNotifications((prev) => [newNotification, ...prev].slice(0, 10));
    };

    const markNotificationsAsRead = () => {
        setNotifications((prev) =>
            prev.map((notif) => ({ ...notif, read: true }))
        );
    };

    const openMissionModal = (mission: Mission) => {
        setSelectedMission(mission);
        setIsMissionModalOpen(true);
    };

    const closeMissionModal = () => {
        setIsMissionModalOpen(false);
        setSelectedMission(null);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const openConfirmModal = (action: () => void) => {
        setConfirmAction(action);
        setIsConfirmModalOpen(true);
    };

    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false);
        setConfirmAction(null);
    };

    const handleConfirm = () => {
        if (confirmAction) {
            confirmAction();
        }
        closeConfirmModal();
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const openCommentModal = () => {
        setIsCommentModalOpen(true);
    };

    const closeCommentModal = () => {
        setIsCommentModalOpen(false);
    };

    const handleCommentSubmit = (comment: string) => {
        showNotification('Commentaire ajouté', `Commentaire : ${comment}`);
        closeCommentModal();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                onToggleTheme={() => {}}
                onNotificationClick={markNotificationsAsRead}
                notificationCount={notifications.filter((n) => !n.read).length}
            />
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="container mx-auto px-4 py-6 flex-grow">
                {activeTab === 'dashboard' && (
                    <Dashboard openMissionModal={openMissionModal} />
                )}
                {activeTab === 'assignment' && <Assignment />}
                {activeTab === 'reports' && <Reports />}
                {activeTab === 'workflow' && <Workflow />}
                {activeTab === 'settings' && <Settings />}
            </div>
            <NotificationPanel
                notifications={notifications}
                isOpen={true} // Changez cela selon votre logique d'affichage
                onClose={() => {}}
            />
            <LoadingOverlay isLoading={loading} />

            <MissionModal
                isOpen={isMissionModalOpen}
                onClose={closeMissionModal}
                mission={selectedMission}
            />
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                onClose={closeConfirmModal}
                title="Confirmation"
                message="Êtes-vous sûr de vouloir effectuer cette action ?"
                onConfirm={handleConfirm}
            />
            <CommentModal
                isOpen={isCommentModalOpen}
                onClose={closeCommentModal}
                onSubmit={handleCommentSubmit}
            />
        </div>
    );
}