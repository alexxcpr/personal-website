import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const FlagRO = () => (
  <svg viewBox="0 0 3 2" className="w-8 h-auto shadow-sm border border-secondary/20 object-cover" aria-hidden="true">
    <rect width="1" height="2" x="0" fill="#002B7F" />
    <rect width="1" height="2" x="1" fill="#FCD116" />
    <rect width="1" height="2" x="2" fill="#CE1126" />
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 60 30" className="w-8 h-auto shadow-sm border border-secondary/20 object-cover" aria-hidden="true">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

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
        overflow-hidden
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
      aria-label={`Switch to ${language === 'ro' ? 'English' : 'Romanian'}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          initial={{ y: -20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: 20, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {language === 'ro' ? <FlagRO /> : <FlagGB />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};
