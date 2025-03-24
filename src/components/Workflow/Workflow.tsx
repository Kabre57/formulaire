
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { missions as initialMissions } from '../../data/mockData';
import { Mission, MissionStatus } from '../../types/types';
import { technicians } from '../../data/mockData';

const Workflow = () => {
  const [missions, setMissions] = useState<Mission[]>(initialMissions);
  const [comment, setComment] = useState('');
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  
  const handleStatusChange = (missionId: string, newStatus: MissionStatus, commentKey?: 'dg' | 'bogui' | 'pdg') => {
    setMissions(missions.map(mission => {
      if (mission.id === missionId) {
        const updatedMission = { 
          ...mission, 
          status: newStatus 
        };
        
        // Ajouter le commentaire si nécessaire
        if (commentKey && comment.trim()) {
          updatedMission.comments = {
            ...mission.comments,
            [commentKey]: comment.trim()
          };
        }
        
        return updatedMission;
      }
      return mission;
    }));
    
    // Réinitialiser le commentaire
    setComment('');
    setSelectedMission(null);
  };
  
  // Filtrer les missions par statut pour chaque onglet
  const pendingDGMissions = missions.filter(
    m => m.status === 'completed' || m.status === 'dg-pending'
  );
  
  const pendingBoguiMissions = missions.filter(
    m => m.status === 'dg-approved' || m.status === 'bogui-pending'
  );
  
  const pendingPDGMissions = missions.filter(
    m => m.status === 'bogui-approved' || m.status === 'pdg-pending'
  );
  
  const completedMissions = missions.filter(
    m => m.status === 'pdg-approved' || m.status === 'pdg-rejected'
  );

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Flux de Validation</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="dg">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="dg">Validation DG ({pendingDGMissions.length})</TabsTrigger>
              <TabsTrigger value="bogui">Validation Bogui ({pendingBoguiMissions.length})</TabsTrigger>
              <TabsTrigger value="pdg">Validation PDG ({pendingPDGMissions.length})</TabsTrigger>
              <TabsTrigger value="completed">Complétés ({completedMissions.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dg">
              <WorkflowTable
                missions={pendingDGMissions}
                actionLabel="Validation DG"
                onApprove={(mission) => handleStatusChange(mission.id, 'dg-approved', 'dg')}
                onReject={(mission) => handleStatusChange(mission.id, 'dg-rejected', 'dg')}
                onComment={(mission) => setSelectedMission(mission)}
                canEdit={mission => mission.status === 'completed' || mission.status === 'dg-pending'}
              />
            </TabsContent>
            
            <TabsContent value="bogui">
              <WorkflowTable
                missions={pendingBoguiMissions}
                actionLabel="Validation Bogui"
                onApprove={(mission) => handleStatusChange(mission.id, 'bogui-approved', 'bogui')}
                onReject={(mission) => handleStatusChange(mission.id, 'bogui-rejected', 'bogui')}
                onComment={(mission) => setSelectedMission(mission)}
                canEdit={mission => mission.status === 'dg-approved' || mission.status === 'bogui-pending'}
              />
            </TabsContent>
            
            <TabsContent value="pdg">
              <WorkflowTable
                missions={pendingPDGMissions}
                actionLabel="Validation PDG"
                onApprove={(mission) => handleStatusChange(mission.id, 'pdg-approved', 'pdg')}
                onReject={(mission) => handleStatusChange(mission.id, 'pdg-rejected', 'pdg')}
                onComment={(mission) => setSelectedMission(mission)}
                canEdit={mission => mission.status === 'bogui-approved' || mission.status === 'pdg-pending'}
              />
            </TabsContent>
            
            <TabsContent value="completed">
              <WorkflowTable
                missions={completedMissions}
                actionLabel="Statut final"
                onApprove={() => {}}
                onReject={() => {}}
                onComment={() => {}}
                canEdit={() => false}
                readOnly
              />
            </TabsContent>
          </Tabs>
          
          {selectedMission && (
            <div className="mt-6 border p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                Commentaire pour : {selectedMission.title}
              </h3>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Entrez votre commentaire..."
                className="w-full mb-4"
                rows={4}
              />
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedMission(null)}
                >
                  Annuler
                </Button>
                <Button 
                  onClick={() => {
                    // Déterminer quelle action prendre selon l'onglet actif
                    if (pendingDGMissions.some(m => m.id === selectedMission.id)) {
                      handleStatusChange(selectedMission.id, 'dg-approved', 'dg');
                    } else if (pendingBoguiMissions.some(m => m.id === selectedMission.id)) {
                      handleStatusChange(selectedMission.id, 'bogui-approved', 'bogui');
                    } else if (pendingPDGMissions.some(m => m.id === selectedMission.id)) {
                      handleStatusChange(selectedMission.id, 'pdg-approved', 'pdg');
                    }
                  }}
                >
                  Valider avec commentaire
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

interface WorkflowTableProps {
  missions: Mission[];
  actionLabel: string;
  onApprove: (mission: Mission) => void;
  onReject: (mission: Mission) => void;
  onComment: (mission: Mission) => void;
  canEdit: (mission: Mission) => boolean;
  readOnly?: boolean;
}

const WorkflowTable: React.FC<WorkflowTableProps> = ({
  missions,
  actionLabel,
  onApprove,
  onReject,
  onComment,
  canEdit,
  readOnly = false
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR');
  };
  
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Horaires</TableHead>
          <TableHead>Mission</TableHead>
          <TableHead>Site</TableHead>
          <TableHead>Techniciens</TableHead>
          <TableHead>Statut</TableHead>
          {!readOnly && <TableHead>{actionLabel}</TableHead>}
          {readOnly && <TableHead>Commentaires</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {missions.length > 0 ? (
          missions.map(mission => (
            <TableRow key={mission.id}>
              <TableCell>{formatDate(mission.startTime)}</TableCell>
              <TableCell>
                {formatTime(mission.startTime)} - {formatTime(mission.endTime)}
              </TableCell>
              <TableCell>{mission.title}</TableCell>
              <TableCell>{mission.location}</TableCell>
              <TableCell>
                {mission.technicianIds.map(id => {
                  const tech = technicians.find(t => t.id === id);
                  return tech ? `${tech.firstName} ${tech.lastName}, ` : '';
                })}
                {mission.includeDG && 'DG'}
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-xs ${
                  mission.status === 'completed' 
                    ? 'bg-blue-100 text-blue-800'
                    : mission.status.includes('approved') 
                      ? 'bg-green-100 text-green-800' 
                      : mission.status.includes('rejected')
                        ? 'bg-red-100 text-red-800'
                        : mission.status.includes('pending')
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                }`}>
                  {mission.status}
                </span>
              </TableCell>
              {!readOnly ? (
                <TableCell>
                  {canEdit(mission) && (
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onApprove(mission)}
                      >
                        Approuver
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onReject(mission)}
                      >
                        Rejeter
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onComment(mission)}
                      >
                        Commenter
                      </Button>
                    </div>
                  )}
                </TableCell>
              ) : (
                <TableCell>
                  {mission.comments && (
                    <div className="text-xs space-y-1">
                      {mission.comments.dg && (
                        <p><strong>DG:</strong> {mission.comments.dg}</p>
                      )}
                      {mission.comments.bogui && (
                        <p><strong>Bogui:</strong> {mission.comments.bogui}</p>
                      )}
                      {mission.comments.pdg && (
                        <p><strong>PDG:</strong> {mission.comments.pdg}</p>
                      )}
                    </div>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={readOnly ? 7 : 7} className="text-center py-4">
              Aucune mission trouvée à valider.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Workflow;
