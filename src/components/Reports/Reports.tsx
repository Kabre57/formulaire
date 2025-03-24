
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { technicians } from '../../data/mockData';
import { Mission } from '../../types/types';

const Reports = () => {
  const [selectedWeek, setSelectedWeek] = useState<string>(getCurrentWeekId());
  const [selectedTechnician, setSelectedTechnician] = useState<string>('all');
  const [selectedSite, setSelectedSite] = useState<string>('all');
  
  // Exemple de données pour les rapports
  const sites = ['Site A', 'Site B', 'Site C', 'Site D', 'Site E'];
  
  // Fonction pour obtenir l'ID de la semaine courante
  function getCurrentWeekId() {
    const now = new Date();
    const start = new Date(now);
    start.setDate(start.getDate() - start.getDay() + 1);
    
    return `${start.getFullYear()}-W${getWeekNumber(start)}`;
  }
  
  // Fonction pour obtenir le numéro de semaine
  function getWeekNumber(d: Date) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    return weekNo;
  }
  
  // Générer les options de semaines (4 semaines précédentes et 4 semaines suivantes)
  const weekOptions = Array.from({ length: 9 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1 - (4 - i) * 7);
    const weekId = `${date.getFullYear()}-W${getWeekNumber(date)}`;
    
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 6);
    
    const formatDate = (d: Date) => {
      return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    };
    
    return {
      id: weekId,
      label: `Semaine ${getWeekNumber(date)} (${formatDate(date)} - ${formatDate(endDate)})`
    };
  });
  
  // Exemple de données pour les missions de cette semaine
  const generateWeekMissions = () => {
    const missions: Mission[] = [];
    const statuses = ['planned', 'in-progress', 'completed', 'dg-approved'] as const;
    
    technicians.forEach(tech => {
      sites.forEach(site => {
        if (Math.random() > 0.7) { // Ne pas générer pour toutes les combinaisons
          const missionCount = 1 + Math.floor(Math.random() * 3);
          
          for (let i = 0; i < missionCount; i++) {
            const now = new Date();
            const weekDay = 1 + Math.floor(Math.random() * 5); // Lundi-Vendredi
            
            now.setDate(now.getDate() - now.getDay() + weekDay);
            const startHour = 8 + Math.floor(Math.random() * 4);
            const duration = 2 + Math.floor(Math.random() * 6);
            
            const startTime = new Date(now);
            startTime.setHours(startHour, Math.random() > 0.5 ? 30 : 0);
            
            const endTime = new Date(startTime);
            endTime.setHours(startTime.getHours() + duration);
            
            missions.push({
              id: `${tech.id}-${site}-${i}`,
              title: `Mission ${tech.lastName} - ${site}`,
              description: `Description de la mission de ${tech.firstName} ${tech.lastName} sur le site ${site}`,
              location: site,
              startTime: startTime.toISOString(),
              endTime: endTime.toISOString(),
              technicianIds: [tech.id],
              includeDG: Math.random() > 0.8,
              status: statuses[Math.floor(Math.random() * statuses.length)]
            });
          }
        }
      });
    });
    
    return missions;
  };
  
  const weekMissions = generateWeekMissions();
  
  // Filtrer les missions selon les critères
  const filteredMissions = weekMissions.filter(mission => {
    let matches = true;
    
    if (selectedTechnician !== 'all') {
      matches = matches && (mission.technicianIds.includes(selectedTechnician) || 
                          (selectedTechnician === 'dg' && mission.includeDG));
    }
    
    if (selectedSite !== 'all') {
      matches = matches && mission.location === selectedSite;
    }
    
    return matches;
  });
  
  // Calculer les heures totales par technicien
  const calculateTotalHours = (techId: string) => {
    let total = 0;
    
    filteredMissions
      .filter(m => m.technicianIds.includes(techId) || (techId === 'dg' && m.includeDG))
      .forEach(mission => {
        const start = new Date(mission.startTime);
        const end = new Date(mission.endTime);
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        total += hours;
      });
    
    return total.toFixed(1);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Rapports Hebdomadaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Semaine</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                >
                  {weekOptions.map(week => (
                    <option key={week.id} value={week.id}>
                      {week.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Technicien</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={selectedTechnician}
                  onChange={(e) => setSelectedTechnician(e.target.value)}
                >
                  <option value="all">Tous les techniciens</option>
                  <option value="dg">DG</option>
                  {technicians.map(tech => (
                    <option key={tech.id} value={tech.id}>
                      {tech.firstName} {tech.lastName}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Site</label>
                <select 
                  className="w-full p-2 border rounded"
                  value={selectedSite}
                  onChange={(e) => setSelectedSite(e.target.value)}
                >
                  <option value="all">Tous les sites</option>
                  {sites.map(site => (
                    <option key={site} value={site}>{site}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Exporter PDF</Button>
              <Button variant="outline">Imprimer</Button>
            </div>
          </div>
          
          <Tabs defaultValue="missions">
            <TabsList>
              <TabsTrigger value="missions">Missions</TabsTrigger>
              <TabsTrigger value="hours">Heures</TabsTrigger>
              <TabsTrigger value="status">Statuts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="missions">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Horaires</TableHead>
                    <TableHead>Mission</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead>Techniciens</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMissions.length > 0 ? (
                    filteredMissions.map(mission => (
                      <TableRow key={mission.id}>
                        <TableCell>
                          {new Date(mission.startTime).toLocaleDateString('fr-FR')}
                        </TableCell>
                        <TableCell>
                          {new Date(mission.startTime).toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                          {' - '}
                          {new Date(mission.endTime).toLocaleTimeString('fr-FR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
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
                            mission.status === 'completed' || mission.status.includes('approved') 
                              ? 'bg-green-100 text-green-800' 
                              : mission.status === 'in-progress' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : mission.status.includes('pending')
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                          }`}>
                            {mission.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        Aucune mission trouvée pour les critères sélectionnés.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="hours">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Technicien</TableHead>
                    <TableHead>Heures totales</TableHead>
                    <TableHead>Nombre de missions</TableHead>
                    <TableHead>Sites visités</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedTechnician === 'all' ? (
                    [...technicians, { id: 'dg', firstName: 'Directeur', lastName: 'Général' }].map(tech => {
                      const techMissions = filteredMissions.filter(m => 
                        m.technicianIds.includes(tech.id) || (tech.id === 'dg' && m.includeDG)
                      );
                      
                      const uniqueSites = new Set(techMissions.map(m => m.location));
                      
                      return (
                        <TableRow key={tech.id}>
                          <TableCell>{tech.firstName} {tech.lastName}</TableCell>
                          <TableCell>{calculateTotalHours(tech.id)} h</TableCell>
                          <TableCell>{techMissions.length}</TableCell>
                          <TableCell>{Array.from(uniqueSites).join(', ')}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell>
                        {selectedTechnician === 'dg' ? 'Directeur Général' : 
                          (() => {
                            const tech = technicians.find(t => t.id === selectedTechnician);
                            return tech ? `${tech.firstName} ${tech.lastName}` : '';
                          })()
                        }
                      </TableCell>
                      <TableCell>{calculateTotalHours(selectedTechnician)} h</TableCell>
                      <TableCell>
                        {filteredMissions.filter(m => 
                          m.technicianIds.includes(selectedTechnician) || 
                          (selectedTechnician === 'dg' && m.includeDG)
                        ).length}
                      </TableCell>
                      <TableCell>
                        {Array.from(
                          new Set(
                            filteredMissions
                              .filter(m => 
                                m.technicianIds.includes(selectedTechnician) || 
                                (selectedTechnician === 'dg' && m.includeDG)
                              )
                              .map(m => m.location)
                          )
                        ).join(', ')}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="status">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Statut</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Pourcentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(() => {
                    const statusMap: Record<string, number> = {};
                    
                    filteredMissions.forEach(mission => {
                      if (!statusMap[mission.status]) {
                        statusMap[mission.status] = 0;
                      }
                      statusMap[mission.status]++;
                    });
                    
                    const total = filteredMissions.length;
                    
                    return Object.entries(statusMap).map(([status, count]) => (
                      <TableRow key={status}>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            status === 'completed' || status.includes('approved') 
                              ? 'bg-green-100 text-green-800' 
                              : status === 'in-progress' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : status.includes('pending')
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                          }`}>
                            {status}
                          </span>
                        </TableCell>
                        <TableCell>{count}</TableCell>
                        <TableCell>{total ? Math.round((count / total) * 100) : 0}%</TableCell>
                      </TableRow>
                    ));
                  })()}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
