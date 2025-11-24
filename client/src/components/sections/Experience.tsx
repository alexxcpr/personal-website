import React from 'react';
import { Card } from '../ui/Card';

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading the frontend team and re-architecting the legacy monolith into microservices."
  },
  {
    role: "Frontend Developer",
    company: "Web Solutions",
    period: "2021 - 2023",
    description: "Built responsive web applications using React and reduced load times by 40%."
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-surface border-y-3 border-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-l-8 border-accent pl-4 text-secondary">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                 <div className="font-mono font-bold bg-primary text-secondary border-2 border-secondary p-2 inline-block shadow-neo transform rotate-2">
                    {exp.period}
                 </div>
              </div>
              <div className="md:w-3/4">
                <Card>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <h4 className="text-xl font-bold text-accent mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

