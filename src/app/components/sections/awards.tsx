'use client';

import SectionHeading from '../common/sectionheading';

export default function Awards() {
  const awardsData = [
    {
      id: 1,
      title: 'First Runners Up',
      details: 'MediOwls - Feature Factory  Hackathon Winner',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6974667584759627776/',
    },
    {
      id: 2,
      title: 'Achiever’s Award',
      details: 'Core values -  End to End Ownership at MediBuddy',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6933439391486857216/',
    },
    {
      id: 3,
      title: 'LABS Hackathon Winner',
      details: 'Delivering Labs features with perfection and speed',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6822890303112974336/',
    },
    {
      id: 4,
      title: 'Star of the Month',
      details: 'Core values - End to End Ownership at MediBuddy',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6831569980283244544/',
    },
    {
      id: 5,
      title: 'Star of the Month',
      details: 'Core values - Speed at MediBuddy',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6974667584759627776/',
    },
  ];

  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Left Half */}
      <section className="col-span-1 md:col-span-4 flex flex-col items-center md:p-8 sm:p-4">
        <SectionHeading name="Recognitions &" styledName="Awards" />
      </section>

      {/* Right Half */}
      <section className="col-span-1 md:col-span-6 md:p-8 sm:p-4">
        <div className="flex flex-wrap -mx-4">
          {awardsData.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/2 px-4 mb-8"
              onClick={() => handleClick(item.link)}
            >
              <div className="service-box p-6 rounded-lg shadow-md relative bg-[#0e0e0e] cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="text-xl font-bold text-gray-300">
                    {item.title}
                  </div>
                </div>
                <div className="flex items-center mb-4 space-x-2 min-h-9">
                  <div className="text-lg font-semibold text-gray-400">
                    {item.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
