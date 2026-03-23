'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / 30;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-fluid-xl font-bold">{count}+</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Resume" />

        <ScrollReveal>
          <div className="border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <AnimatedCounter target={6} label="Years" />
                <AnimatedCounter target={4} label="Companies" />
                <AnimatedCounter target={2} label="Publications" />
                <AnimatedCounter target={5} label="Awards" />
              </div>

              {/* Download */}
              <div className="text-center md:text-right space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Download my full resume for a detailed overview of my
                  experience, skills, and achievements.
                </p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
