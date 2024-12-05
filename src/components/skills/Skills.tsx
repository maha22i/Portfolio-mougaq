import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Heart } from 'lucide-react';
import SkillCategory from './SkillCategory';
import InterestCard from './InterestCard';

const skillsData = {
  professional: [
    { name: "Droits des affaires", level: 90 },
    { name: "Comptabilité", level: 95 },
    { name: "Audit", level: 85 },
    { name: "Comptabilité financière", level: 90 },
    { name: "Formation", level: 80 }
  ],
  languages: [
    { name: "Français", level: 100 },
    { name: "Anglais", level: 80 },
    { name: "Afar", level: 100 }
  ],
  interests: [
    "Finance",
    "Audit",
    "Gestion",
    "Comptabilité"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Compétences & Intérêts
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SkillCategory
              title="Compétences Professionnelles"
              skills={skillsData.professional}
              icon={Code}
              direction="left"
            />
          </div>
          
          <div className="space-y-8">
            <SkillCategory
              title="Langues"
              skills={skillsData.languages}
              icon={Globe}
              direction="right"
            />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Heart className="w-6 h-6" />
                Centres d'intérêts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsData.interests.map((interest, index) => (
                  <InterestCard
                    key={interest}
                    interest={interest}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;