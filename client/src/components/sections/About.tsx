import React from 'react';
import { Card } from '../ui/Card';
import profile from '../../assets/profile.jpeg';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, viewportConfig } from '../../animations/variants';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-8 bg-surface border-y-3 border-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="relative"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
            {/* Glitch effect loop for image - Matrix Style */}
            <div className="aspect-square border-3 border-secondary shadow-neo glitch-wrapper scanlines">
                {/* Base Image */}
                <img src={profile} alt="Profile" className="w-full h-full object-cover relative z-10" />
                
                {/* Glitch Layers for Loop Effect */}
                <img src={profile} aria-hidden="true" className="glitch-layer absolute inset-0 w-full h-full object-cover z-20" />
                <img src={profile} aria-hidden="true" className="glitch-layer absolute inset-0 w-full h-full object-cover z-20" />
            </div>
        </motion.div>
        
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl font-bold mb-6 border-l-8 border-primary pl-4">{t.about.title}</h2>
          <Card className="bg-main">
            <p className="text-lg mb-4">
              {t.about.p1}
            </p>
            <p className="text-lg mb-4">
              {t.about.p2}
            </p>
            {t.about.p3 && <p className="text-lg">{t.about.p3}</p>}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
