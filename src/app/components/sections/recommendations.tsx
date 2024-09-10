import Image from 'next/image';
import arnab from '../../../../assets/arnab.jpeg';
import vamsi from '../../../../assets/vamsi.jpeg';
import avinash from '../../../../assets/avinash.jpeg';
import SectionHeading from '../common/sectionheading';

export default function Recommendations() {
  const recommendationsData = [
    {
      id: 0,
      avatar: arnab,
      name: 'Arnab Mukherjee',
      title:
        'SDE2 - ML @ Raft.ai | Ex - MediBuddy • PharmEasy • Fix Health • BITS Pilani',
      details:
        "Subham is an excellent software engineer. His ability to single handedly manage big projects and super fast closure is what makes him special. He also focuses a lot on the quality of code written and is good at mentoring others. I'm sure he'll make a great addition to any team!",
    },
    {
      id: 1,
      avatar: avinash,
      name: 'Avinash Kumar Jha',
      title: 'Senior Product Manager at Intuit',
      details:
        'I had the pleasure of working with Subham on insurance tech projects, and I can confidently say that he is an asset to any team. Subham has a fast execution and is open to new ideas. He has a learning mindset and is open to experimentation. Subham is also keen on learning new technologies and using them innovatively. His ability to work collaboratively and his dedication to his work make him an excellent team player. I highly recommend Subham for any future projects.',
    },
    {
      id: 2,
      avatar: vamsi,
      name: 'Vamsi Krishna Geelapaturu',
      title: 'Building reliable and scalable backend at MediBuddy',
      details:
        'I had the pleasure of working with Subham for almost 3 years involving a lot of projects. He is a very talented engineer with deep knowledge of the workings of how systems work. His expertise in frontend and backend helped our team complete projecs in time and with atmost pefection. He complements the team and extends his support whenever required.',
    },
  ];

  return (
    <div className="container mx-auto p-6 md:p-12">
      <section className="flex flex-col items-center md:p-8 sm:p-4">
        <SectionHeading name="Recommendations" styledName="..." />
      </section>

      <section className="relative pt-8 sm:pt-4">
        <div
          className="flex lg:justify-center md:justify-start overflow-x-auto gap-8 sm:gap-0 pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {recommendationsData.map((item) => (
            <div
              key={item.id}
              className={`service-box flex-shrink-0 w-full md:w-80 sm:w-full sm:overflow-x-scroll p-6 rounded-lg bg-[#0e0e0e] snap-start transition-transform duration-1000 ease-in-out transform ${item.id == 1 ? 'scale-90' : 'scale-95'}`}
            >
              <div className="testimonial-avatar mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
                  width={100}
                  height={100}
                />
              </div>
              <div className="testimonial-content">
                <div className="mb-3">
                  <h3 className="text-md font-bold text-gray-300">
                    {item.name}
                  </h3>
                  <span className="text-white">{item.title}</span>
                </div>
                <p className="text-gray-400 text-sm italic">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
