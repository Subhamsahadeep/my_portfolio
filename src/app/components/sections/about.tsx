import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Profile } from './profile';

export default function About() {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center p-6 relative text-white">
      <section className="flex flex-col items-center relative">
        {/* Container for the image with glow effect */}
        <Profile />

        <div className="w-full mt-6">
          <ul className="flex justify-center space-x-4">
            {[
              {
                href: 'https://www.linkedin.com/in/subhamsahadeep/',
                icon: <FaLinkedin />,
                alt: 'LinkedIn',
                bg: 'bg-blue-800',
              },
              {
                href: 'https://github.com/Subhamsahadeep',
                icon: <FaGithub />,
                alt: 'Github',
                bg: 'bg-gray-500',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <a
                  href={item.href}
                  aria-label={item.alt}
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
