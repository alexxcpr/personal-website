import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`
      bg-surface 
      border-3 border-secondary 
      shadow-neo 
      p-6
      ${className}
    `}>
      {title && (
        <h3 className="text-xl font-bold mb-4 border-b-3 border-secondary pb-2 inline-block">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

