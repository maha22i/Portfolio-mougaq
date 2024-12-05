import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['À propos', 'Expérience', 'Formation', 'Projets', 'Compétences', 'Contact'];

  return (
    <motion.header 
      className="fixed w-full bg-white/10 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            MHA
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/mohamedchemkhi' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohamedhoumadadan2000/' },
              { Icon: Mail, href: 'mailto:mohamedhoumadadan@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={href}
                href={href}
                className="text-white/90 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.button 
            className="md:hidden text-white"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/10 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-white/90 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;