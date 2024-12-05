import React from 'react';
import { motion } from 'framer-motion';

interface InterestCardProps {
  interest: string;
  index: number;
}

const InterestCard: React.FC<InterestCardProps> = ({ interest, index }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
    >
      <span className="text-white/90">{interest}</span>
    </motion.div>
  );
};

export default InterestCard;