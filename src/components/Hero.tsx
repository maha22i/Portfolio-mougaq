import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHxP-n_gwyDTA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670510684338?e=1738800000&v=beta&t=1RL1RuZcBb2WgJRviaBHb3BzNHSb251Gfy1SgXxBSBY"
              alt="Mohamed Houmad"
              className="w-50 h-40 rounded-full mx-auto border-4 border-white shadow-xl"
            />
          </motion.div>
          
          <AnimatedText 
            text="Mohamed Houmad Adan"
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          />
          
          <AnimatedText 
            text="Étudiant en master comptabilité,contrôle et audit"
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;