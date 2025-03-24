
import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="py-12 border-t border-border"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Minima</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Un site web minimaliste dédié à l'élégance dans sa forme la plus pure et la plus simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-7.6 7-4 1.5 0 3-1 3-1z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Caractéristiques</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Minima. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Créé avec <HeartIcon className="w-4 h-4 text-primary mx-1" /> pour le design minimaliste
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
