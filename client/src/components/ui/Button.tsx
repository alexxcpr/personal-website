import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-primary text-text-on-primary border-border-on-primary hover:bg-accent hover:text-white hover:border-secondary',
  secondary: 'bg-secondary text-white border-secondary hover:bg-gray-800',
  outline: 'bg-transparent text-secondary border-secondary hover:bg-primary hover:text-text-on-primary hover:border-border-on-primary',
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 0, y: 0 }}
      className={`
        px-6 py-3 
        font-bold text-lg 
        border-3 
        shadow-neo
        hover:shadow-neo-hover
        transition-all duration-200
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};
