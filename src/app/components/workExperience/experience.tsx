'use client';
import { useScroll, useTransform, motion, easeInOut } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import TimelineContent from './content';
import { TimelineHeading } from './heading';
import Heading from '../common/heading';

export interface TimelineHeadingProps {
  organisation: string;
  title: string;
  link?: string;
  designation: string;
  content: React.ReactNode;
  skills: string;
}

export const Experience = ({ data }: { data: TimelineHeadingProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(100);

  // Recalculate height whenever the data or timeline content changes
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  // Attach scrollYProgress to the containerRef for smooth scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 100%'],
  });

  // Apply transforms based on the scroll progress
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height], {
    ease: easeInOut, // Using Framer Motion's predefined easing function
  });
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1], {
    ease: easeInOut,
  });

  return (
    <div className="w-full" ref={containerRef}>
      <Heading name="Work Experience" />
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item: TimelineHeadingProps, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-10 md:gap-10"
          >
            {/* Timeline marker */}
            <TimelineHeading item={item} />

            {/* Content */}
            <TimelineContent item={item} />
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
