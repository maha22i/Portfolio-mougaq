import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Heart } from 'lucide-react';

const skills = {
  "Compétences Techniques": [
    { name: "HTML CSS", level: 100 },
    { name: "Bubble.io", level: 80 },
    { name: "JAVASCRIPT", level: 80 },
    { name: "REACT", level: 80 },
    { name: "NODE", level: 60 },
    { name: "Github", level: 80 },
    { name: "Wordpress", level: 80 },
    { name: "Unity", level: 80 },
    { name: "Python", level: 60 },
    { name: "Mongodb", level: 60 },
    { name: "C#", level: 60 },
    { name: ".NET", level: 80 },
    { name: "Microsoft Azure", level: 80 },
    { name: "Amazon Web Services", level: 80 }
  ],
  "Langues": [
    { name: "Français", level: 100 },
    { name: "Afar", level: 100 },
    { name: "Anglais", level: 40 },
    { name: "Arabe", level: 40 }
  ]
};

const interests = [
  "Politique",
  "Jeux de société & football",
  "Documentaire",
  "Musique"
];

const SkillDots = ({ level }: { level: number }) => {
  const dots = Array(5).fill(0);
  const filledDots = Math.round((level / 100) * 5);

  return (
    <div className="flex gap-2">
      {dots.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index < filledDots 
              ? 'bg-gradient-to-r from-purple-400 to-pink-500' 
              : 'bg-white/20'
          }`}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Code className="w-6 h-6" />
              Compétences
            </h2>
            <div className="space-y-4">
              {skills["Compétences Techniques"].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-white/90">{skill.name}</span>
                  <SkillDots level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <Globe className="w-6 h-6" />
                Langues
              </h2>
              <div className="space-y-4">
                {skills["Langues"].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-white/90">{lang.name}</span>
                    <SkillDots level={lang.level} />
                  </motion.div>
                ))}
              </div>
              
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <Heart className="w-6 h-6" />
                Centres d'intérêts
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white/90">{interest}</span>
                  </motion.div>
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