
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CalendarIcon, UsersIcon, FileTextIcon, ArrowDownIcon, LogOutIcon } from 'lucide-react';
import { toast } from "sonner";

const Header = () => {
  const navigate = useNavigate();
  
  // Get user from localStorage
  const getUserName = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).name : "Utilisateur";
  };
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Déconnexion réussie");
    navigate("/login");
  };

  return (
    <header className="bg-primary text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Progitek Planning</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-200">
            <CalendarIcon size={20} />
            <span>Planning</span>
          </Link>
          <Link to="/technicians" className="flex items-center space-x-2 hover:text-gray-200">
            <UsersIcon size={20} />
            <span>Techniciens</span>
          </Link>
          <Link to="/reports" className="flex items-center space-x-2 hover:text-gray-200">
            <FileTextIcon size={20} />
            <span>Rapports</span>
          </Link>
          <Link to="/workflow" className="flex items-center space-x-2 hover:text-gray-200">
            <ArrowDownIcon size={20} />
            <span>Flux de validation</span>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-sm">{getUserName()}</span>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-1"
          >
            <LogOutIcon size={16} />
            <span>Déconnexion</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
