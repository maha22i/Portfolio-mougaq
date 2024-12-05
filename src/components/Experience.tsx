import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    period: "févr. 2023 - aujourd'hui",
    title: "Assistant comptable",
    company: "Cim consulting groupe senegal · Stage",
    description: "Mise en place de la comptabilité (création de la base comptable de la société sur sage avec tous les paramétrages nécessaires, classement archivage et saisie des pièces comptables)",
    location: "Sénégal · Sur site",
    technologies: ["Sage", "Comptabilité", "Gestion"]
  },
  {
    period: "nov. 2021 - mars 2022",
    title: "Assistant comptable",
    company: "GTI EXPERTISE · Stage",
    description: "Tenue de la comptabilité générale (saisie, lettrage, pointage des écritures comptable). Verification traitement et classement des pièces comptables.",
    location: "Région de Dakar, Sénégal",
    technologies: ["Comptabilité générale", "Gestion documentaire", "Audit"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Briefcase className="w-8 h-8" />
          Expérience Professionnelle
        </motion.h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-white/80">{exp.company}</p>
                    <p className="text-white/60">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-pink-500/20 text-pink-200">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-white/70">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/20 text-white/90 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;