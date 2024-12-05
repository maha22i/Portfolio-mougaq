import React from 'react';
import { motion } from 'framer-motion';

interface SkillDotsProps {
  level: number;
}

const SkillDots: React.FC<SkillDotsProps> = ({ level }) => {
  const dots = Array(5).fill(0);
  const filledDots = Math.round((level / 100) * 5);

  return (
    <div className="flex gap-2">
      {dots.map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
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

export default SkillDots;