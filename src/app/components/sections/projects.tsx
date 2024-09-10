'use client';

import SectionHeading from '../common/sectionHeading';

export default function Projects() {
  const cards = [
    {
      id: 1,
      image: 'https://subhamsahadeep.github.io/RkmvAlumni/', // Replace with actual image URL
      text: 'Ramakrishna Mission Vidyalaya - Alumni Page',
      githubLink: 'https://github.com/your-repo/project1', // Replace with actual GitHub link
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      text: 'Project 2',
      githubLink: 'https://github.com/your-repo/project2', // Replace with actual GitHub link
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8">
      <section className="p-8 border border-black/5 rounded-[20px] bg-[#121214] shadow-[inset_0_.362176px_.651917px_-1px_#ffffff06,inset_0_3px_5.4px_-2px_#ffffff09] col-span-12 overflow-x-auto">
        <SectionHeading name="My" styledName="Projects" />
        <div className="flex space-x-4 min-w-max my-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg w-80 flex-shrink-0"
            >
              <div className="mt-4 text-center text-white">
                <p className="text-lg font-semibold">{card.text}</p>
                <a
                  href={card.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
