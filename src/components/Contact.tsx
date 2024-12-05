import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Parlons de votre projet</h3>
            <p className="text-white/80 mb-8">
              Je suis actuellement à la recherche d'opportunités de stage et de projets passionnants.
              N'hésitez pas à me contacter !
            </p>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 10 }}
              >
                <Mail className="w-6 h-6 text-pink-400 mr-4" />
                <span className="text-white">mohamedhoumadadan@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 10 }}
              >
                <Phone className="w-6 h-6 text-pink-400 mr-4" />
                <span className="text-white">+221 77 219 82 61</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-6 h-6 text-pink-400 mr-4" />
                <span className="text-white">Dakar, Sénegal</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                Nom
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                className="block w-full rounded-lg bg-white/10 border-transparent focus:border-pink-500 focus:ring-pink-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                className="block w-full rounded-lg bg-white/10 border-transparent focus:border-pink-500 focus:ring-pink-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                rows={4}
                className="block w-full rounded-lg bg-white/10 border-transparent focus:border-pink-500 focus:ring-pink-500 text-white"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;