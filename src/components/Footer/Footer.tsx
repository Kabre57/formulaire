
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white py-3 px-6 mt-auto"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">© {currentYear} Progitek Planning. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200 text-sm">Mentions légales</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm">CGU</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
