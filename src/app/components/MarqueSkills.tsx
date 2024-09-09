// components/MarqueeSkills.tsx
'use client';
import Marquee from 'react-fast-marquee';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'Express',
  'Postgres',
  'AWS',
  'Docker',
];

const MarqueeSkills: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee gradientColor="primary">
        <div className="flex space-x-10 text-xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-w-max">
          {Array(5)
            .fill(
              <>
                {skills.map((skill, index) => (
                  <div key={index} className="flex-shrink-0">
                    {skill}
                  </div>
                ))}
              </>,
            )
            .flat()}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSkills;
