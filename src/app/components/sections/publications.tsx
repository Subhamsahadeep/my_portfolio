'use client';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';
import { ExternalLink, Trophy } from 'lucide-react';

const publications = [
  {
    title: 'Designing a Mobile based Non-Verbal Classroom Interaction System',
    date: 'Mar 2019',
    journal: 'SSRN',
    downloads: 158,
    views: 1284,
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3361038',
  },
  {
    title: 'BYOD Supported Multimodal Classroom Interaction',
    date: 'Apr 2020',
    journal: 'Elsevier',
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050920308309?via%3Dihub',
  },
];

const awards = [
  {
    title: 'First Runners Up',
    details: 'MediOwls - Feature Factory Hackathon',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6974667584759627776/',
  },
  {
    title: "Achiever's Award",
    details: 'End to End Ownership at MediBuddy',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6933439391486857216/',
  },
  {
    title: 'LABS Hackathon Winner',
    details: 'Delivering Labs features with perfection',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6822890303112974336/',
  },
  {
    title: 'Star of the Month',
    details: 'End to End Ownership at MediBuddy',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6831569980283244544/',
  },
  {
    title: 'Star of the Month',
    details: 'Speed at MediBuddy',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6974667584759627776/',
  },
];

export default function PublicationsAwards() {
  return (
    <section id="publications" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Publications */}
        <SectionHeading title="Publications" />
        <div className="space-y-4 mb-20">
          {publications.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-6 border border-border rounded-lg hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:text-foreground transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">
                      {item.journal}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                    {item.downloads && item.downloads > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {item.downloads} downloads
                      </span>
                    )}
                    {item.views && item.views > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {item.views} views
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-2 italic">
                    Special thanks to Dr. Suman Deb
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Awards */}
        <SectionHeading title="Recognitions & Awards" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((item, i) => (
            <ScrollReveal key={`${item.title}-${i}`} delay={i * 0.06}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-5 border border-border rounded-lg hover:border-foreground/20 transition-all duration-300"
              >
                <Trophy
                  size={16}
                  className="text-muted-foreground mt-0.5 flex-shrink-0"
                />
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.details}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
