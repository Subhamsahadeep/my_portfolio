'use client';
import { ScrollReveal } from './scroll-reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px flex-1 bg-border" />
        <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {subtitle && (
        <p className="text-center text-muted-foreground text-fluid-sm max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
