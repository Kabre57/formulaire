
import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, DatabaseIcon, PenToolIcon, GlobeIcon, ServerIcon, LayoutIcon } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: LayoutIcon,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Backend",
    icon: ServerIcon,
    technologies: ["Node.js", "Express", "PHP", "Python", "Django", "Flask", "GraphQL", "REST API"]
  },
  {
    category: "Base de données",
    icon: DatabaseIcon,
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Redis"]
  },
  {
    category: "DevOps",
    icon: GlobeIcon,
    technologies: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"]
  },
  {
    category: "Design",
    icon: PenToolIcon,
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Responsive Design"]
  },
  {
    category: "Autres",
    icon: CodeIcon,
    technologies: ["Testing", "Jest", "Cypress", "SEO", "Accessibilité", "Performance"]
  }
];

const SkillCategory = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-background rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-secondary text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const PortfolioSkills = () => {
  return (
    <section id="portfolio-skills" className="py-24">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Compétences
          </span>
          <h2 className="heading-2 mb-4">
            Mon expertise technique
          </h2>
          <p className="subheading">
            Un aperçu des technologies et des compétences que j'ai acquises et perfectionnées au fil des années.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCategory key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;
