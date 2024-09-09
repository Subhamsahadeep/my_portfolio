"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type HeadingProps = {
    name: string;
}
const Heading = ({name}: HeadingProps) => {
  const ref = useRef(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start the animation when the element is fully in view
  });

  // Create scroll-based animations
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Fade in
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // Scale up
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]); // Slide up

  return (
    <div
      ref={ref}
      className="mx-auto px-4 md:px-4 lg:px-10 bg-clip-text text-transparent text-center bg-gradient-to-b from-black to-purple-600"
    >
      <motion.h2
        className="w-full font-bold text-4xl text-center  mb-4 text-transparent bg-clip-text bg-gradient-to-b from-black to-purple-500"
        style={{ opacity, scale, y }}
      >
        {name}
      </motion.h2>
    </div>
  );
};

export default Heading;
