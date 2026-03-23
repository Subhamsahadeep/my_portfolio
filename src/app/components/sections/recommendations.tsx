'use client';
import Image from 'next/image';
import arnab from '../../../../assets/arnab.jpeg';
import vamsi from '../../../../assets/vamsi.jpeg';
import avinash from '../../../../assets/avinash.jpeg';
import { SectionHeading } from '../common/section-heading';
import { ScrollReveal } from '../common/scroll-reveal';
import { Quote } from 'lucide-react';

const recommendationsData = [
  {
    avatar: arnab,
    name: 'Arnab Mukherjee',
    title: 'SDE2 - ML @ Raft.ai | Ex - MediBuddy',
    details:
      "Subham is an excellent software engineer. His ability to single handedly manage big projects and super fast closure is what makes him special. He also focuses a lot on the quality of code written and is good at mentoring others. I'm sure he'll make a great addition to any team!",
  },
  {
    avatar: avinash,
    name: 'Avinash Kumar Jha',
    title: 'Senior Product Manager at Intuit',
    details:
      'I had the pleasure of working with Subham on insurance tech projects, and I can confidently say that he is an asset to any team. Subham has a fast execution and is open to new ideas. He has a learning mindset and is open to experimentation.',
  },
  {
    avatar: vamsi,
    name: 'Vamsi Krishna Geelapaturu',
    title: 'Building scalable backend at MediBuddy',
    details:
      'I had the pleasure of working with Subham for almost 3 years involving a lot of projects. He is a very talented engineer with deep knowledge of how systems work. His expertise in frontend and backend helped our team complete projects in time and with utmost perfection.',
  },
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Recommendations" />

        <div className="grid md:grid-cols-3 gap-4">
          {recommendationsData.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <div className="border border-border rounded-lg p-6 h-full flex flex-col">
                <Quote
                  size={20}
                  className="text-muted-foreground/30 mb-4 flex-shrink-0"
                />
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 italic">
                  {item.details}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-[11px] text-muted-foreground">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
