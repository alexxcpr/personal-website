import type { Variants, Transition } from "framer-motion";

// Configurații globale pentru consistență
export const transition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export const slowTransition: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
  duration: 0.8,
};

// Container Stagger (pentru liste/grile)
export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger mai lent pentru secțiuni mari
export const slowStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Fade In Up (Generic, bun pentru titluri, carduri)
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transition
  },
};

// Fade In Left (bun pentru elemente care vin din stânga - ex: text About, Contact)
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transition
  },
};

// Fade In Right (bun pentru elemente care vin din dreapta - ex: imagini About, Contact)
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transition
  },
};

// Item Scale (bun pentru badge-uri sau elemente mici)
export const itemScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
};

// Viewport settings standard
export const viewportConfig = {
  once: true,
  amount: 0.2, // Trigger când 20% din element e vizibil
  margin: "0px 0px -100px 0px" // Offset mic
};

