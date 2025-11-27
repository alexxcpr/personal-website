import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { slowStagger, fadeInUp, viewportConfig } from '../../animations/variants';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-8 bg-main">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="text-4xl font-bold mb-12 text-center"
        >
          {t.projects.title}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={slowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {t.projects.items.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card title={project.title} className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <p className="mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(tech => (
                    <Badge key={tech} className="text-xs">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="primary" className="w-full text-sm">{t.projects.demo}</Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full text-sm">{t.projects.code}</Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
