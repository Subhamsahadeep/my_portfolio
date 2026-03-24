'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../../data/projects';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ── Screenshot Gallery ─────────────────────────────────────────── */
function ScreenshotGallery({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
      {screenshots.map((src, i) => (
        <div
          key={i}
          className="relative flex-shrink-0 w-36 aspect-video md:w-44 rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-lg cursor-pointer"
        >
          <Image
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            fill
            className="object-cover object-top"
            sizes="176px"
          />
        </div>
      ))}
    </div>
  );
}

/* ── Expandable Description ─────────────────────────────────────── */
function ExpandableText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`text-muted-foreground text-xs leading-[1.7] ${
          !expanded ? 'line-clamp-2 md:line-clamp-3' : ''
        }`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mt-2"
      >
        {expanded ? '— Less' : '+ Read more'}
      </button>
    </div>
  );
}

/* ── Featured Project Card ──────────────────────────────────────── */
function FeaturedCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-colors duration-300 cursor-default">
        {/* Screenshots area */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="px-6 pt-6 md:px-8 md:pt-8">
            <ScreenshotGallery
              screenshots={project.screenshots}
              title={project.title}
            />
          </div>
        )}

        {/* Content */}
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="min-w-0">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Featured Project
              </span>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug text-foreground">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-2 flex-shrink-0 pt-6">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
                  aria-label={`View ${project.title} source`}
                >
                  <FaGithub size={14} />
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-[13px] leading-[1.7] mb-3">
            {project.description}
          </p>

          {/* Long description */}
          {project.longDescription && (
            <div className="mb-6">
              <ExpandableText text={project.longDescription} />
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ── Other Project Card ─────────────────────────────────────────── */
function OtherCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <article className="group bg-card rounded-xl border border-border p-5 md:p-6 hover:border-foreground/20 transition-colors duration-300 h-full flex flex-col cursor-default">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-sm font-semibold leading-snug text-foreground">
            {project.title}
          </h3>
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200 flex-shrink-0"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={11} />
            </a>
          )}
        </div>

        {/* Screenshot */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-3">
            <ScreenshotGallery
              screenshots={project.screenshots}
              title={project.title}
            />
          </div>
        )}

        {/* Description */}
        <p className="text-muted-foreground text-xs leading-[1.7] mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ── Main Section ───────────────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Projects" />

        {/* Featured projects */}
        <div className="space-y-8 mb-14">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Other Work
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {others.map((project, i) => (
                <OtherCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
