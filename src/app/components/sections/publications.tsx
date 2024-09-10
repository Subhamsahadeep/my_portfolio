'use client';

import SectionHeading from '../common/sectionheading';

export default function Publications() {
  const serviceData = [
    {
      id: 1,
      title: 'Designing a Mobile based Non-Verbal Classroom Interaction System',
      date: 'Mar 28, 2019 - SSRN',
      downloads: 158,
      views: 1284,
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3361038', // Replace with your actual link
    },
    {
      id: 2,
      title: 'BYOD Supported Multimodal Classroom Interaction',
      date: 'Apr 17, 2020 - Elsevier',
      downloads: 0, // No data available
      views: 0, // No data available
      link: 'https://www.sciencedirect.com/science/article/pii/S1877050920308309?via%3Dihub', // Replace with your actual link
    },
  ];

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Left Half */}
      <section className="col-span-1 md:col-span-4 flex flex-col items-center md:p-8 sm:p-4">
        <SectionHeading name="What are my" styledName="Publications" />
      </section>

      <section className="col-span-1 md:col-span-6 md:p-8 sm:p-4">
        <div className="space-y-4">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="service-box p-6 mb-20 rounded-lg shadow-md relative bg-[#0e0e0e] cursor-pointer"
              onClick={() => handleClick(item.link)}
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-gray-300">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center mb-4 space-x-2">
                <h3 className="text-lg font-semibold text-gray-400">
                  {item.date}
                </h3>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                {item.downloads > 0 && (
                  <div>
                    Downloads <span>{item.downloads}</span>
                  </div>
                )}
                {item.views > 0 && (
                  <div>
                    Abstract Views <span>{item.views}</span>
                  </div>
                )}
              </div>
              <div className="text-gray-500 text-sm text-right italic pt-2">
                Special thanks to Dr.Suman Deb
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
