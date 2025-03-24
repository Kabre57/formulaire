
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-fluid">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Nouvelle expérience
                </span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="heading-1">
                Un design minimaliste pour une expérience remarquable
              </motion.h1>
              <motion.p variants={itemVariants} className="subheading max-w-xl">
                Découvrez une nouvelle approche du design, où simplicité et élégance se rencontrent pour créer une expérience utilisateur exceptionnelle.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#features" className="btn-primary">
                Explorer
              </a>
              <a href="#about" className="btn-secondary">
                En savoir plus
              </a>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary">
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 50px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <motion.div 
                  className="w-2/3 h-2/3 bg-white rounded-xl glass shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <div className="w-full h-full p-6 flex flex-col">
                    <div className="flex space-x-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex flex-col space-y-3">
                      <div className="w-full h-2 bg-gray-200 rounded-full" />
                      <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                      <div className="w-5/6 h-2 bg-gray-200 rounded-full" />
                      <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
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

export default Hero;
