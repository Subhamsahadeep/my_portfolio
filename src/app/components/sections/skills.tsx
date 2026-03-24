'use client';
import { useRef, useCallback, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import {
  skillCategories,
  type SkillCategory,
  type Skill,
} from '../../data/skills';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';

/* ═══════════════════════════════════════════
   Animated card with cursor-tracking glow border
   ═══════════════════════════════════════════ */
function GlowCard({
  children,
  className = '',
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-200);
    mouseY.set(-200);
  }, [mouseX, mouseY]);

  const glowBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 60%)`,
  );

  const borderGlow = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(250px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 50%)`,
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative group cursor-pointer ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{ background: borderGlow }}
      />

      {/* Inner surface glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{ background: glowBg }}
      />

      {/* Card */}
      <div
        className={`relative rounded-2xl border bg-card/50 backdrop-blur-sm h-full transition-colors duration-500 ${
          active
            ? 'border-foreground/20'
            : 'border-border group-hover:border-foreground/10'
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Animated skill pill with staggered entrance
   ═══════════════════════════════════════════ */
function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -5, scale: 0.95 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: [0, 1, 0.5, 1],
      }}
      className="group/pill relative"
    >
      <div className="relative overflow-hidden rounded-lg border border-border hover:border-foreground/20 bg-background/60 transition-all duration-300">
        {/* Animated fill bar behind text */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-foreground/[0.04]"
          initial={{ width: 0 }}
          animate={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.04,
            ease: [0, 1, 0.5, 1],
          }}
        />
        <div className="relative flex items-center justify-between px-3.5 py-2.5">
          <span className="text-[13px] text-foreground/80 group-hover/pill:text-foreground transition-colors font-medium">
            {skill.name}
          </span>
          {/* Level dots */}
          <div className="flex gap-1 ml-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4 + index * 0.04 + i * 0.05,
                }}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < skill.level
                    ? 'bg-foreground/50 group-hover/pill:bg-foreground/70'
                    : 'bg-border'
                } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Category tab button for the selector
   ═══════════════════════════════════════════ */
function CategoryTab({
  category,
  active,
  onClick,
  index,
}: {
  category: SkillCategory;
  active: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative text-left px-4 py-2.5 lg:px-5 lg:py-4 rounded-full lg:rounded-xl border whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
        active
          ? 'border-foreground/20 bg-card'
          : 'border-transparent hover:border-border hover:bg-card/30'
      }`}
    >
      {/* Active indicator line (desktop only) */}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 top-3 bottom-3 w-[2px] bg-foreground/60 rounded-full hidden lg:block"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <div className="text-sm font-semibold tracking-wide lg:mb-0.5">
        {category.title}
      </div>
      <div className="text-[11px] text-muted-foreground leading-relaxed hidden lg:block">
        {category.description}
      </div>
    </button>
  );
}

/* ═══════════════════════════════════════════
   Floating skill cloud — all skills scattered
   ═══════════════════════════════════════════ */
function SkillCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <motion.div
      ref={ref}
      className="hidden md:flex flex-wrap gap-2 justify-center"
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.02 } },
      }}
    >
      {allSkills.map((skill) => (
        <motion.span
          key={skill.name}
          variants={{
            hidden: { opacity: 0, scale: 0.7, y: 10 },
            show: { opacity: 1, scale: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.08,
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
          transition={{ duration: 0.3 }}
          className="px-3 py-1.5 text-[11px] tracking-wider uppercase border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/20 cursor-default transition-colors duration-200"
        >
          {skill.name}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Main Skills Section
   ═══════════════════════════════════════════ */
export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills & Expertise" />

        {/* Floating tag cloud — overview of all skills */}
        <ScrollReveal className="mb-16">
          <SkillCloud />
        </ScrollReveal>

        {/* Interactive detail view */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Category selector */}
          <div className="lg:col-span-4 flex overflow-x-auto gap-2 pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0 scrollbar-thin">
            {skillCategories.map((category, i) => (
              <CategoryTab
                key={category.title}
                category={category}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
                index={i}
              />
            ))}
          </div>

          {/* Right: Skill detail panel */}
          <div className="lg:col-span-8">
            <GlowCard active>
              <div className="p-6 md:p-8">
                {/* Header */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold tracking-wide">
                        {activeCategory.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground bg-card border border-border rounded-full px-2.5 py-0.5">
                        {activeCategory.skills.length} skills
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {activeCategory.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Skill pills grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.title + '-skills'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {activeCategory.skills.map((skill, i) => (
                      <SkillPill key={skill.name} skill={skill} index={i} />
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Proficiency legend */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Proficiency
                  </span>
                  <div className="flex items-center gap-4">
                    {['Familiar', 'Proficient', 'Expert'].map((label, i) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div
                              key={j}
                              className={`w-1 h-1 rounded-full ${
                                j <= i + 2 ? 'bg-foreground/50' : 'bg-border'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
