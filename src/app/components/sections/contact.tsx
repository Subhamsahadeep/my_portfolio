'use client';
import { useRef, useCallback, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';
import { Mail, Calendar, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

/* ═══════════════════════════════════════════
   GlowCard — cursor-tracking glow border
   ═══════════════════════════════════════════ */
function GlowCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
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
      className={`relative group ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{ background: borderGlow }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        style={{ background: glowBg }}
      />
      <div className="relative rounded-2xl border border-border group-hover:border-foreground/10 bg-card/50 backdrop-blur-sm h-full transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════ */
const contactChannels = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'subhamsahadeep@gmail.com',
    href: 'mailto:subhamsahadeep@gmail.com',
  },
  {
    icon: <FaLinkedinIn size={22} />,
    label: 'LinkedIn',
    value: '/in/subhamsahadeep',
    href: 'https://www.linkedin.com/in/subhamsahadeep/',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: '/Subhamsahadeep',
    href: 'https://github.com/Subhamsahadeep',
  },
  {
    icon: <Calendar size={24} />,
    label: 'Schedule a Call',
    value: 'Book a 30-min chat',
    href: 'https://cal.com/subhamsaha',
  },
];

/* ═══════════════════════════════════════════
   Main Contact Section
   ═══════════════════════════════════════════ */
export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let's build something great together."
        />

        {/* ── Big CTA Headline ── */}
        <ScrollReveal className="mb-16">
          <div className="text-center">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0, 1, 0.5, 1] }}
            >
              Have a project?
              <br />
              <span className="text-muted-foreground">Let&apos;s talk.</span>
            </motion.h3>
          </div>
        </ScrollReveal>

        {/* ── Contact Channel Cards (2x2 grid) ── */}
        <ScrollReveal className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {contactChannels.map((channel, i) => (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0, 1, 0.5, 1],
                }}
              >
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith('mailto:') ? undefined : '_blank'
                  }
                  rel="noopener noreferrer"
                >
                  <GlowCard className="cursor-pointer">
                    <div className="p-7 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl border border-border bg-background/50 text-foreground/70">
                          {channel.icon}
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                          {channel.label}
                        </p>
                        <p className="text-base text-foreground/80 group-hover:text-foreground transition-colors duration-300 truncate">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </a>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Availability Status ── */}
        <ScrollReveal>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Currently open to freelance projects &amp; new opportunities
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
