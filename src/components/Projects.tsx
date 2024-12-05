import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Application de Gestion des Projets Étudiants",
    description: "Développement d'une plateforme collaborative pour la gestion des projets étudiants à l'UPHF",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    github: "https://github.com/mohamedhoumad",
    demo: "https://demo.com"
  },
  {
    title: "Système de Gestion Universitaire",
    description: "Plateforme de gestion des notes et emplois du temps pour l'Université de Djibouti",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/mohamedhoumad",
    demo: "https://demo.com"
  },
  {
    title: "Système d'Archivage Numérique",
    description: "Solution de gestion documentaire pour le Centre d'Études et de Recherche de Djibouti",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=800",
    tech: ["PHP", "MySQL", "JavaScript", "jQuery"],
    github: "https://github.com/mohamedhoumad",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/20 text-white/90 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a 
                    href={project.github}
                    className="flex items-center text-white/90 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    className="flex items-center text-pink-400 hover:text-pink-300"
                    whileHover={{ scale: 1.05 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;