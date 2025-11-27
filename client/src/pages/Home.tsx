import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Pricing } from '../components/sections/Pricing';
import { Contact } from '../components/sections/Contact';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="w-full">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Pricing />
      <Contact />
      
      <footer className="bg-surface text-secondary border-t-3 border-secondary py-6 text-center font-mono">
        <p>©{new Date().getFullYear()} Stănciulescu Alex Ciprian. {t.footer.copyright}</p>
      </footer>
    </main>
  );
};

export default Home;
