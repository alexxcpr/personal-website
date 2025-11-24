import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const codeSnippets = [
  "const matrix = true;",
  "function wakeUp() { ... }",
  "console.log('Follow the white rabbit');",
  "<div className='reality'></div>",
  "import { Freedom } from 'life';",
  "git push origin master --force",
  "while(alive) { code(); }",
  "sys.exit(0)",
];

export const ParallaxCode: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create multiple floating elements with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
       {/* Floating Snippets */}
       <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] text-muted opacity-30 font-mono text-sm">
          {codeSnippets[0]}
       </motion.div>
       <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[10%] text-primary opacity-20 font-mono text-xs">
          {codeSnippets[1]}
       </motion.div>
       <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[15%] text-secondary opacity-10 font-mono text-lg font-bold">
          {codeSnippets[2]}
       </motion.div>
       <motion.div style={{ y: y4 }} className="absolute top-[80%] right-[20%] text-accent opacity-25 font-mono text-sm">
          {codeSnippets[3]}
       </motion.div>
       <motion.div style={{ y: y2 }} className="absolute top-[20%] left-[60%] text-muted opacity-15 font-mono text-sm">
          {codeSnippets[4]}
       </motion.div>
       <motion.div style={{ y: y1 }} className="absolute top-[50%] right-[5%] text-primary opacity-20 font-mono text-xs">
          {codeSnippets[5]}
       </motion.div>
    </div>
  );
};

