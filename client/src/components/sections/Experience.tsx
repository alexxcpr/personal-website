import React from 'react';
import { Card } from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { slowStagger, fadeInRight, itemScale, viewportConfig } from '../../animations/variants';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-8 bg-main">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportConfig}
          className="text-4xl font-bold mb-12 border-l-8 border-accent pl-4 text-secondary"
        >
          {t.experience.title}
        </motion.h2>
        
        <motion.div 
          className="space-y-8"
          variants={slowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {t.experience.items.map((exp, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row gap-4"
              variants={fadeInRight}
            >
              <div className="md:w-1/4">
                 <motion.div 
                   variants={itemScale}
                   className="font-mono font-bold bg-primary text-text-on-primary border-2 border-border-on-primary p-2 inline-block shadow-neo transform rotate-2"
                 >
                    {exp.period}
                 </motion.div>
              </div>
              <div className="md:w-3/4">
                <Card>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <h4 className="text-xl font-bold text-accent mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
