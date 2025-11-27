import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { fadeInUp, containerStagger } from '../../animations/variants';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 relative overflow-hidden">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        <motion.h2 variants={fadeInUp} className="text-lg md:text-2xl font-mono text-primary mb-4 font-bold">
          {t.hero.greeting}
        </motion.h2>
        
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter text-secondary break-words">
          STĂNCIULESCU ALEX CIPRIAN
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-secondary mb-8 max-w-2xl mx-auto font-medium px-2">
          {t.hero.role} <span className="text-primary font-bold border-b-4 border-primary/50 mx-2">{t.hero.description}</span>
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaWork}
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaContact}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
