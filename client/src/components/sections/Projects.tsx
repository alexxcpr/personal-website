import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../context/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-8 bg-main">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <Card key={index} title={project.title} className="flex flex-col h-full">
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
          ))}
        </div>
      </div>
    </section>
  );
};
