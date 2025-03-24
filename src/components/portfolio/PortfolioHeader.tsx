
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const PortfolioHeader = () => {
  return (
    <section id="portfolio-header" className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-fluid">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Portfolio
                </span>
              </motion.div>
              <motion.h1 
                className="heading-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Développeur Web Créatif
              </motion.h1>
              <motion.p 
                className="subheading max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Spécialisé dans la création d'expériences web modernes, intuitives et performantes.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#portfolio-projects" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#portfolio-contact" className="btn-secondary">
                Me contacter
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
