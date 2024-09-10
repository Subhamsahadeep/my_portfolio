'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import { TimelineHeadingProps } from './experience';
import { SkillsExperience } from './skills';
import { Organisation } from './organisation';

const TimelineContent = ({ item }: { item: TimelineHeadingProps }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 90%'], // Trigger animations when visible
  });

  // Use transform to create raw scale and opacity animations
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Scale from 0.9 to 1
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in

  // Use spring to smooth out the animations and sync with rendering
  const smoothScale = useSpring(rawScale, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const smoothOpacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="relative pl-20 pr-4 md:pl-4 w-full"
      style={{ scale: smoothScale, opacity: smoothOpacity }} // Apply smoothed scale and opacity
    >
      <motion.div
        className="mb-4 flex justify-between"
        style={{ scale: smoothScale }} // Apply smoothed scale
      >
        <div className="md:hidden block text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <Organisation name={item.organisation} url={item.link} />
          <div className="md:hidden block my-auto text-xs md:text-sm xs:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r text-gray-200">
            {item.title}
          </div>
        </div>
        <div className="md:hidden block text-right text-md my-auto md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          {item.designation}
        </div>
      </motion.div>
      <motion.div
        className="p-6 rounded-lg border text-gray-200 border-purple-600 shadow-lg shadow-blue-600/50"
        style={{ scale: smoothScale }} // Apply smoothed scale
      >
        <SkillsExperience item={item} />
      </motion.div>
    </motion.div>
  );
};

export default TimelineContent;
