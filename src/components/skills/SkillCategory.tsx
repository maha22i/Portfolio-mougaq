import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import SkillDots from './SkillDots';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: LucideIcon;
  direction?: 'left' | 'right';
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, 
  skills, 
  icon: Icon,
  direction = 'left'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <Icon className="w-6 h-6" />
        {title}
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex justify-between items-center group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
          >
            <span className="text-white/90 group-hover:text-white transition-colors">
              {skill.name}
            </span>
            <SkillDots level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;