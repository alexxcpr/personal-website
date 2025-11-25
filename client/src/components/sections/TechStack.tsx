import React from 'react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

const skills = [
  "React", "TypeScript", "Node.js", "Express", "Tailwind CSS", 
  "Framer Motion", "PostgreSQL", "MongoDB", "Docker", "Git"
];

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-8 bg-main">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-secondary pb-2">{t.techStack.title}</h2>
        <Card>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} className="text-lg py-2 px-4 hover:bg-primary hover:text-secondary cursor-default transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
