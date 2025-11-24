import React from 'react';
import { Card } from '../ui/Card';
import profile from '../../assets/profile.jpeg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 bg-surface border-y-3 border-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            {/* Glitch effect loop for image - Matrix Style */}
            <div className="aspect-square border-3 border-secondary shadow-neo glitch-wrapper scanlines">
                {/* Base Image */}
                <img src={profile} alt="Profile" className="w-full h-full object-cover relative z-10" />
                
                {/* Glitch Layers for Loop Effect */}
                <img src={profile} aria-hidden="true" className="glitch-layer absolute inset-0 w-full h-full object-cover z-20" />
                <img src={profile} aria-hidden="true" className="glitch-layer absolute inset-0 w-full h-full object-cover z-20" />
            </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 border-l-8 border-primary pl-4">About Me</h2>
          <Card className="bg-main">
            <p className="text-lg mb-4">
              I am a passionate developer with a knack for building robust and scalable web applications. 
              My journey started with a simple "Hello World" and has evolved into complex full-stack architectures.
            </p>
            <p className="text-lg">
              When I'm not coding, I'm exploring new design trends like Neobrutalism and experimenting with interactive 3D elements.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

