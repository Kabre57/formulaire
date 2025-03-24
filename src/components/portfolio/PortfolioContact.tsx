
import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

const PortfolioContact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message envoyé! Nous vous contacterons bientôt.");
    // Ici vous pourriez ajouter une logique d'envoi de formulaire réelle
  };

  return (
    <section id="portfolio-contact" className="py-24 bg-gradient-to-t from-background to-secondary/30">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="heading-2 mb-4">
            Discutons de votre projet
          </h2>
          <p className="subheading">
            Vous avez un projet en tête? Je suis toujours ouvert à discuter de nouvelles opportunités et à relever de nouveaux défis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Mes coordonnées</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10 text-primary">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10 text-primary">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a href="tel:+33612345678" className="text-muted-foreground hover:text-foreground transition-colors">
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Localisation</h4>
                  <p className="text-muted-foreground">
                    Paris, France
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      required
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
                      required
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
                    required
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
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
