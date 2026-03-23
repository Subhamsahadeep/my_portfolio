'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SkillsExperience = ({ skills }: { skills: string[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap gap-2"
    >
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.02 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.12em] px-3 py-1 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300 cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
};
