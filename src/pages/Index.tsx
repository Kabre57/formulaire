
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { ArrowRightIcon, ArrowDownIcon, SearchIcon, RefreshCwIcon } from 'lucide-react';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          controls.start('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24">
      <div className="container-fluid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="relative mx-auto max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                <div className="h-full w-full flex flex-col p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 ml-4 bg-secondary h-6 rounded-md relative px-4 overflow-hidden">
                      <motion.div 
                        className="absolute top-1.5 left-0 h-3 bg-primary/20 rounded-md" 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="bg-secondary/50 rounded-lg p-3 flex flex-col items-center justify-center">
                      <SearchIcon className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm text-center">Rechercher</span>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3 flex flex-col items-center justify-center">
                      <RefreshCwIcon className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm text-center">Synchroniser</span>
                    </div>
                    <div className="col-span-2 bg-secondary/50 rounded-lg p-3 flex items-center justify-center">
                      <ArrowRightIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                À propos
              </span>
              <h2 className="heading-2">
                Pourquoi choisir une approche minimaliste?
              </h2>
              <p className="subheading">
                Le minimalisme n'est pas seulement une esthétique, c'est une philosophie qui place l'expérience utilisateur au centre de la conception.
              </p>
              <ul className="space-y-4">
                {[
                  "Élimination des distractions pour se concentrer sur l'essentiel",
                  "Amélioration de la lisibilité et de la compréhension",
                  "Réduction du temps de chargement et optimisation des performances",
                  "Expérience intuitive adaptée à tous les utilisateurs"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="mr-3 mt-1 text-primary">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66663 10.1147L12.7947 3.98602L13.7381 4.92935L6.66663 12.0013L2.42396 7.75935L3.36796 6.81535L6.66663 10.1147Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-2">
                <motion.a
                  href="#contact"
                  variants={itemVariants}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-background to-secondary/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="heading-2 mb-4">
            Prêt à commencer votre projet?
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment notre approche minimaliste peut transformer votre expérience numérique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background rounded-2xl p-8 border border-border shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Sujet de votre message"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

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
      <ArrowDownIcon className="w-5 h-5 transform rotate-180" />
    </motion.button>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
