// src/app/components/TechniciensCRUD.tsx

import React, { useState } from 'react';

// Définition du type Technicien
interface Technicien {
    id: number;
    nom: string;
    prenoms: string;
    contact: string;
}

const TechniciensCRUD = () => {
    const [techniciens, setTechniciens] = useState<Technicien[]>([]);
    const [selectedTechnicien, setSelectedTechnicien] = useState<number | null>(null);
    const [formState, setFormState] = useState<Omit<Technicien, 'id'>>({ nom: '', prenoms: '', contact: '' });

    const handleAddTechnicien = () => {
        const newTechnicien: Technicien = { id: Date.now(), ...formState }; // Simuler un ID unique
        setTechniciens([...techniciens, newTechnicien]);
        resetForm();
    };

    const handleEditTechnicien = (id: number) => {
        const technicien = techniciens.find(t => t.id === id);
        if (technicien) {
            setFormState({ nom: technicien.nom, prenoms: technicien.prenoms, contact: technicien.contact });
            setSelectedTechnicien(id);
        }
    };

    const handleUpdateTechnicien = () => {
        setTechniciens(techniciens.map(t => t.id === selectedTechnicien ? { ...t, ...formState } : t));
        resetForm();
    };

    const handleDeleteTechnicien = (id: number) => {
        setTechniciens(techniciens.filter(t => t.id !== id));
    };

    const resetForm = () => {
        setFormState({ nom: '', prenoms: '', contact: '' });
        setSelectedTechnicien(null);
    };

    return (
        <div>
            <h2>Gestion des Techniciens</h2>
            <form onSubmit={(e) => { e.preventDefault(); selectedTechnicien ? handleUpdateTechnicien() : handleAddTechnicien(); }}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={formState.nom}
                    onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Prénoms"
                    value={formState.prenoms}
                    onChange={(e) => setFormState({ ...formState, prenoms: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Contact"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    required
                />
                <button type="submit">{selectedTechnicien ? 'Modifier' : 'Ajouter'}</button>
            </form>

            <ul>
                {techniciens.map(technicien => (
                    <li key={technicien.id}>
                        {technicien.nom} {technicien.prenoms} - {technicien.contact}
                        <button onClick={() => handleEditTechnicien(technicien.id)}>Modifier</button>
                        <button onClick={() => handleDeleteTechnicien(technicien.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechniciensCRUD;