
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-40 ${
        isVisible ? 'flex' : 'hidden'
      } items-center justify-center`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      aria-label="Retour en haut"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </motion.button>
  );
};

export default ScrollToTop;
