import React from 'react';
import { motion, AnimatePresence, type HTMLMotionProps } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-surface
        border-3 border-secondary
        shadow-neo
        flex items-center justify-center
        cursor-pointer
        outline-none
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
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? (
            <Sun className="w-6 h-6 text-secondary" strokeWidth={2.5} />
          ) : (
            <Moon className="w-6 h-6 text-primary" strokeWidth={2.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

