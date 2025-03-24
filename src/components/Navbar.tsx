
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Caractéristiques', href: '#features' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'glass shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="container-fluid flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Minima
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Commencer
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-foreground transition-transform duration-300",
              menuOpen ? "rotate-45 translate-y-2" : ""
            )} />
            <span className={cn(
              "block h-0.5 bg-foreground transition-opacity duration-300",
              menuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={cn(
              "block h-0.5 bg-foreground transition-transform duration-300",
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            )} />
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 glass shadow-md transition-all duration-300 overflow-hidden",
        menuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
      )}>
        <nav className="container-fluid flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center"
            onClick={() => setMenuOpen(false)}
          >
            Commencer
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
