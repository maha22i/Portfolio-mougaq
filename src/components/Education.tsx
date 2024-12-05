import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    period: "janv. 2023 - juin 2024",
    degree: "Diplôme Supérieur de gestion et de comptabilité (DSGC)",
    school: "Conservatoire National des Arts et Métiers",
    location: "France"
  },
  {
    period: "mars 2023 - déc. 2023",
    degree: "Master 2 (M2), Comptabilité contrôle audit",
    school: "École supérieure polytechnique de Dakar",
    location: "Dakar, Sénégal"
  },
  {
    period: "2019 - 2021",
    degree: "Diplôme supérieur de gestion et de comptabilité",
    school: "École supérieure polytechnique de Dakar",
    location: "Dakar, Sénégal",
    details: "Niveau : 13"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="w-8 h-8" />
          Formation
        </motion.h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-white/80 mb-1">{edu.school}</p>
                  <p className="text-white/60">{edu.location}</p>
                  {edu.details && <p className="text-white/60 mt-1">{edu.details}</p>}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-500/20 text-purple-200">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;