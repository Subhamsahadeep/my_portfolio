'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ExperienceData } from './details';
import { Organisation } from './organisation';
import { SkillsExperience } from './skills';
import { FaArrowRight } from 'react-icons/fa';

function MetricCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0, 1, 0.5, 1] }}
      className="relative group px-4 py-3 md:px-6 md:py-4 rounded-lg border border-border bg-card overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
          {value}
        </div>
        <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function AchievementItem({
  text,
  isHighlight,
  delay,
}: {
  text: string;
  isHighlight: boolean;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: [0, 1, 0.5, 1] }}
      className={`flex items-start gap-3 py-2.5 ${
        isHighlight
          ? 'px-4 -mx-4 rounded-lg bg-foreground/[0.04] border border-border/50'
          : ''
      }`}
    >
      <FaArrowRight
        className={`mt-1 flex-shrink-0 text-[10px] ${
          isHighlight ? 'text-foreground' : 'text-muted-foreground/50'
        }`}
      />
      <span
        className={`text-sm leading-relaxed ${
          isHighlight ? 'text-foreground/90 font-medium' : 'text-foreground/60'
        }`}
      >
        {text}
      </span>
    </motion.div>
  );
}

export function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceData;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0, 1, 0.5, 1],
      }}
      className="relative"
    >
      {/* Sequence number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -left-2 md:-left-12 top-0 text-[80px] md:text-[120px] font-bold leading-none text-foreground/[0.04] select-none pointer-events-none"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      <div className="relative">
        {/* Header: org, role, date */}
        <div className="mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4 mb-2"
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              <Organisation name={item.organisation} url={item.link} />
            </h3>
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 font-medium md:pb-2">
              {item.period}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm md:text-base text-foreground/60 font-medium tracking-wide"
          >
            {item.designation}
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px bg-border mt-4 origin-left"
          />
        </div>

        {/* Metrics row */}
        {item.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {item.metrics.map((metric, i) => (
              <MetricCard
                key={i}
                value={metric.value}
                label={metric.label}
                delay={0.3 + i * 0.08}
              />
            ))}
          </div>
        )}

        {/* Achievements */}
        <div className="mb-8 space-y-1">
          {item.achievements.map((achievement, i) => (
            <AchievementItem
              key={i}
              text={achievement.text}
              isHighlight={achievement.isHighlight || false}
              delay={0.3 + i * 0.06}
            />
          ))}
        </div>

        {/* Skills */}
        <SkillsExperience skills={item.skills} />
      </div>
    </motion.div>
  );
}
