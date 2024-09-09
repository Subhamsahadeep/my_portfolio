'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import myImage from '../../../assets/profile.jpg';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="container mx-auto h-screen flex items-center justify-center p-6 relative text-white">
      <section className="flex flex-col items-center relative">
        {/* Container for the image with glow effect */}
        <div className="relative">
          <div className="glow-effect" />
          <div className="relative z-10">
            <Image
              src={myImage}
              alt="My Image"
              className="w-32 h-32 rounded-full mb-4"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-2">Subham Saha</h2>

        <p className="text-gray-400 text-center">
          I am a Senior Software Engineer based in{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
            Bengaluru
          </span>
          , India.
        </p>

        <div className="w-full mt-6">
          <ul className="flex justify-center space-x-4">
            {[
              {
                href: 'https://www.linkedin.com/in/subhamsahadeep/',
                icon: <FaLinkedin />,
                bg: 'bg-blue-800',
              },
              {
                href: 'https://leetcode.com/u/subhamsahadeep/',
                icon: <SiLeetcode />,
                bg: 'bg-yellow-800',
              },
              {
                href: 'https://github.com/Subhamsahadeep',
                icon: <FaGithub />,
                bg: 'bg-gray-500',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  className={`relative z-10 block p-2.5 px-3 rounded-lg border border-white/10 text-gray-300 text-xl hover:text-white ${item.bg} transition-all duration-300 ease-in-out`}
                >
                  {item.icon}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
