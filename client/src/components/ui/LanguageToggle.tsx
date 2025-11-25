import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`
       
        w-14 h-14
        rounded-full
        bg-surface
        border-3 border-secondary
        shadow-neo
        flex items-center justify-center
        cursor-pointer
        outline-none
        font-mono font-bold text-sm
      `}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: '6px 6px 0px 0px var(--col-secondary)',
        y: -2, x: -2
      }}
      whileTap={{ 
        scale: 0.95, 
        boxShadow: '2px 2px 0px 0px var(--col-secondary)',
        y: 0, x: 0
      }}
      aria-label="Toggle Language"
    >
      <motion.span
        key={language}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-secondary"
      >
        {language.toUpperCase()}
      </motion.span>
    </motion.button>
  );
};

