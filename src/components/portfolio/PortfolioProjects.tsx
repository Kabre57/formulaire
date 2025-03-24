
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: "Application E-commerce",
    description: "Une plateforme de commerce électronique complète avec panier, paiement et gestion des commandes.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "#",
    demo: "#"
  },
  {
    title: "Dashboard Analytique",
    description: "Tableau de bord interactif pour visualiser et analyser des données complexes.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "#",
    demo: "#"
  },
  {
    title: "Application Mobile",
    description: "Application de suivi de fitness avec synchronisation cloud et analyses personnalisées.",
    tags: ["React Native", "Redux", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    github: "#",
    demo: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg group">
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-secondary text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <a 
            href={project.github} 
            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon size={16} />
            <span>Code</span>
          </a>
          <a 
            href={project.demo} 
            className="text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Démo</span>
            <ExternalLinkIcon size={16} />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PortfolioProjects = () => {
  return (
    <section id="portfolio-projects" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mes Projets
          </span>
          <h2 className="heading-2 mb-4">
            Découvrez mes réalisations récentes
          </h2>
          <p className="subheading">
            Une sélection de projets qui démontrent mes compétences en développement web et ma capacité à créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group">
            <span className="mr-2">Voir tous les projets</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
