'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import profileImg from '../../../../assets/profile.jpg';
import { useRef, useCallback } from 'react';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 1, 0.5, 1] },
  },
};

function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0, 1, 0.5, 1] }}
      className="flex justify-center md:justify-end"
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative group cursor-default"
      >
        {/* Orbiting ring — space vibe */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-5 rounded-full border border-dashed border-foreground/15"
        >
          {/* Small orbiting dots */}
          <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/30" />
          <div className="absolute top-1/2 -right-0.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground/20" />
        </motion.div>

        {/* Secondary slower orbit ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-10 rounded-full border border-dotted border-foreground/8"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground/15" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground/15" />
        </motion.div>

        {/* Pulsing glow */}
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-1 rounded-full border border-foreground/10"
        />

        {/* Circular image */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border">
          <Image
            src={profileImg}
            alt="Subham Saha"
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            priority
          />
        </div>

        {/* Available badge — fixed bottom-right */}
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]"
            />
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-foreground/80">
              Available
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_hsl(var(--foreground)/0.03)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="md:col-span-2 space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Senior Software Engineer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-fluid-2xl font-bold tracking-tight leading-[0.95]"
            >
              SUBHAM
              <br />
              SAHA
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="text-fluid-base text-muted-foreground h-8"
            >
              <TypeAnimation
                sequence={[
                  'Senior Software Engineer',
                  2000,
                  'Senior Product Engineer',
                  2000,
                  'AI & GenAI Developer',
                  2000,
                  'System Design Architect',
                  2000,
                  'UI/UX Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                repeat={Infinity}
                speed={40}
                className="text-foreground/60"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-fluid-sm max-w-lg leading-relaxed"
            >
              Building scalable platforms, intelligent AI systems, and
              pixel-perfect interfaces. 6+ years crafting enterprise products at
              scale.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="https://github.com/Subhamsahadeep"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/subhamsahadeep/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <ProfileImage />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.a>
    </section>
  );
}
