import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="bg-surface text-secondary border-t-3 border-secondary py-6 text-center font-mono">
        <p>©{new Date().getFullYear()} Stănciulescu Alex Ciprian. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
