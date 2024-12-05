import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80">© 2024 Mohamed Houmad Adan. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;