'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import { TimelineHeadingProps } from './experience';
import { SkillsExperience } from './skills';

const TimelineContent = ({ item }: { item: TimelineHeadingProps }) => {
  const ref = useRef(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 90%'], // Trigger animations when visible
  });

  // Create scroll-based animations with smoothing
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Scale from 0.9 to 1
  const smoothScale = useSpring(rawScale, {
    stiffness: 100, // Lower stiffness to smooth the animation
    damping: 20, // Higher damping to slow it down a bit
    mass: 0.5, // Lower mass for more control
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in
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
          {item.organisation}
          <div className="md:hidden block text-sm my-auto md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r text-gray-200">
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