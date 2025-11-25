import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-lg md:text-2xl font-mono text-primary mb-4 font-bold">{t.hero.greeting}</h2>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter text-secondary break-words">
          STĂNCIULESCU ALEX CIPRIAN
        </h1>
        <p className="text-lg md:text-2xl text-secondary mb-8 max-w-2xl mx-auto font-medium px-2">
          {t.hero.role} <span className="bg-primary text-secondary px-2 inline-block">{t.hero.description}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaWork}
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.ctaContact}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
