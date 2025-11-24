import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-block
      bg-surface
      text-secondary font-mono font-bold text-sm
      border-2 border-secondary
      px-3 py-1
      shadow-neo
      ${className}
    `}>
      {children}
    </span>
  );
};

