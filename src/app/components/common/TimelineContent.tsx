'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type ItemProps = {
  organisation: string;
  title: string;
  designation: string;
  content: React.ReactNode;
  skills: string;
};

const TimelineContent = ({ item }: { item: ItemProps }) => {
  const ref = useRef(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 50%'], // Trigger animations when visible
  });

  // Create scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]); // Scale up from 0.8 to 1

  return (
    <motion.div
      ref={ref}
      className="relative pl-20 pr-4 md:pl-4 w-full"
      style={{ scale }}
    >
      <motion.div className="mb-4 flex justify-between" style={{ scale }}>
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
        className="p-6 rounded-lg border border-purple-600 shadow-lg shadow-blue-600/50"
        style={{ scale }}
      >
        {item.content}
        <div className="text-gray-600 text-xs md:text-sm text-right">
          {item.skills}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineContent;
