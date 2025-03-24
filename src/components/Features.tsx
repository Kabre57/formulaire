
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { LightbulbIcon, PenToolIcon, ZapIcon, LayersIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: delay * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="group bg-background rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
    >
      <div className="mb-4 p-3 rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: LightbulbIcon,
      title: "Design intuitif",
      description: "Une expérience utilisateur pensée pour être immédiatement compréhensible et accessible à tous."
    },
    {
      icon: PenToolIcon,
      title: "Esthétique soignée",
      description: "Des compositions visuelles épurées mettant en valeur votre contenu sans distraction inutile."
    },
    {
      icon: ZapIcon,
      title: "Performance optimale",
      description: "Des animations fluides et une navigation rapide pour une expérience utilisateur sans friction."
    },
    {
      icon: LayersIcon,
      title: "Structure cohérente",
      description: "Une architecture de l'information logique et une hiérarchie visuelle claire pour guider l'utilisateur."
    }
  ];

  return (
    <section 
      id="features" 
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container-fluid">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Caractéristiques
          </span>
          <h2 className="heading-2 mb-4">
            Un design qui suit les principes du minimalisme
          </h2>
          <p className="subheading">
            Découvrez comment notre approche du design se concentre sur l'essentiel pour créer une expérience utilisateur exceptionnelle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
