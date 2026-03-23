'use client';
import { projects } from '../../data/projects';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Projects" />

        {/* Featured projects */}
        <div className="space-y-6 mb-12">
          {featured.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="group border border-border rounded-lg p-8 hover:border-foreground/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Featured
                    </span>
                    <h3 className="text-fluid-lg font-bold mt-1">
                      {project.title}
                    </h3>
                  </div>
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.longDescription && (
                  <p className="text-muted-foreground/70 text-xs leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <div className="border border-border rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 h-full">
                <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border rounded-full text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
