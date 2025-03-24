
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Technician } from '../../types/types';
import { technicians as initialTechnicians } from '../../data/mockData';

const Technicians = () => {
  const [technicians, setTechnicians] = useState<Technician[]>(initialTechnicians);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');

  const handleAddTechnician = () => {
    if (firstName.trim() && lastName.trim()) {
      const newTech: Technician = {
        id: Date.now().toString(),
        firstName: firstName.trim(),
        lastName: lastName.trim()
      };
      
      setTechnicians([...technicians, newTech]);
      setFirstName('');
      setLastName('');
    }
  };

  const handleStartEdit = (tech: Technician) => {
    setEditMode(tech.id);
    setEditFirstName(tech.firstName);
    setEditLastName(tech.lastName);
  };

  const handleSaveEdit = () => {
    if (editMode && editFirstName.trim() && editLastName.trim()) {
      setTechnicians(technicians.map(tech => 
        tech.id === editMode 
          ? { ...tech, firstName: editFirstName.trim(), lastName: editLastName.trim() } 
          : tech
      ));
      setEditMode(null);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleDeleteTechnician = (id: string) => {
    setTechnicians(technicians.filter(tech => tech.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Gestion des Techniciens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Ajouter un technicien</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Prénom du technicien"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nom du technicien"
                  />
                </div>
                <Button onClick={handleAddTechnician}>Ajouter</Button>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prénom</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {technicians.map((tech) => (
                <TableRow key={tech.id}>
                  <TableCell>
                    {editMode === tech.id ? (
                      <Input
                        value={editFirstName}
                        onChange={(e) => setEditFirstName(e.target.value)}
                      />
                    ) : (
                      tech.firstName
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode === tech.id ? (
                      <Input
                        value={editLastName}
                        onChange={(e) => setEditLastName(e.target.value)}
                      />
                    ) : (
                      tech.lastName
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode === tech.id ? (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={handleSaveEdit}>
                          Enregistrer
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                          Annuler
                        </Button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleStartEdit(tech)}>
                          Modifier
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDeleteTechnician(tech.id)}
                        >
                          Supprimer
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Technicians;
