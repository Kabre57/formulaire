
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mission, Technician } from '../../types/types';
import { technicians } from '../../data/mockData';

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (mission: Omit<Mission, 'id'>) => void;
}

const MissionModal: React.FC<MissionModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedTechnicians, setSelectedTechnicians] = useState<string[]>([]);
  const [includeDG, setIncludeDG] = useState(false);

  const handleSave = () => {
    // Validation de base
    if (!title || !location || !startDate || !startTime || !endDate || !endTime) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Création de l'objet mission à partir des données du formulaire
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    // Vérifier que la date de fin est après la date de début
    if (endDateTime <= startDateTime) {
      alert('La date et l\'heure de fin doivent être postérieures à la date et l\'heure de début');
      return;
    }

    const newMission: Omit<Mission, 'id'> = {
      title,
      description,
      location,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      technicianIds: selectedTechnicians,
      includeDG,
      status: 'planned',
    };

    onSave(newMission);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setLocation('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setSelectedTechnicians([]);
    setIncludeDG(false);
  };

  const handleTechnicianChange = (techId: string) => {
    setSelectedTechnicians(prev => 
      prev.includes(techId)
        ? prev.filter(id => id !== techId)
        : [...prev, techId]
    );
  };

  // Obtenir la date d'aujourd'hui au format YYYY-MM-DD pour les champs de date
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ajouter une nouvelle mission</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Titre*
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
              placeholder="Titre de la mission"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Description détaillée de la mission"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Lieu*
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="col-span-3"
              placeholder="Lieu de la mission"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Date début*
            </Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="col-span-3"
              min={today}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startTime" className="text-right">
              Heure début*
            </Label>
            <Input
              id="startTime"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              Date fin*
            </Label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="col-span-3"
              min={startDate || today}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endTime" className="text-right">
              Heure fin*
            </Label>
            <Input
              id="endTime"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right pt-2">
              Techniciens
            </Label>
            <div className="col-span-3 space-y-2">
              {technicians.map((tech) => (
                <div key={tech.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`tech-${tech.id}`}
                    checked={selectedTechnicians.includes(tech.id)}
                    onCheckedChange={() => handleTechnicianChange(tech.id)}
                  />
                  <Label htmlFor={`tech-${tech.id}`}>
                    {tech.firstName} {tech.lastName}
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox 
                  id="includeDG"
                  checked={includeDG}
                  onCheckedChange={() => setIncludeDG(!includeDG)}
                />
                <Label htmlFor="includeDG">Inclure le DG</Label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Annuler</Button>
          <Button onClick={handleSave}>Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MissionModal;
