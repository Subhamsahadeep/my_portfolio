'use client';
import React from 'react';
import { Timeline } from './Timeline';

export function Experience() {
  const data = [
    {
      title: 'Oct 2023 - Present',
      organisation: 'Travelopia',
      designation: 'Product Engineer',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
            <li>
              Developed the myTCS and FourSeasons platforms front-end (post
              reservation) ensuring consistent component structure across
              diverse brand themes using semantic tokens and extendTheme by
              Chakra UI. Enhanced platform capabilities significantly by
              seamlessly integrating static data fetching from a CMS tool
              (Sanity).
            </li>
            <li>
              Developing custom React components with individualized designs
              using Chakra UI defineStyle and semantics to maintain a similar
              user experience for all themes. Utilizing Storybook for thorough
              component testing.
            </li>
            <li>
              Batching HTTP requests with TRPC and Zod types ensures type safety
              and boosts reusability. AWS Step Functions synchronize payment
              flow processes, invoking lambda functions at each step.
            </li>
            <li>
              Improved app performance from 10 seconds to 500 milliseconds with
              a cache layer, enhancing user experience. Leveraged SQS for faster
              write operations and asynchronous data syncing, optimizing
              performance further.
            </li>
          </ul>
        </div>
      ),
      skills:
        'Tailwind, Bootstrap, NextJs, Node.js, Express.js, ReactJs, JavaScript, TypeScript, React Query, React Hook Form, Zod, TRPC, Chakra UI, Jenkins, GIT Actions, Docker, StoryBook, Jest, React Testing Library, Husky, Lint-Stage, AWS, Redis, Clevertap, Sentry, DataDog, Newrelic',
    },
    {
      title: 'Jan 2022 - Oct 2023',
      organisation: 'MediBuddy',
      designation: 'SDE II',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
            <li>
              Improving Medibuddy’s Core Vitals [ LCP , TBT ] ( Accessibility
              Score 65 to 80 and SEO Score 75 to 92 )
            </li>
            <li>
              Implemented Automated Dialler for Insurance business segment. This
              development helped to minimise manual calling to customers and
              more conversion of calls. [ Integrations with Kaleyra and Ameyo ]
            </li>
            <li>
              Real-time syncing of all the case data for different insurers -
              Internal tool developed for Analytics. ( receiving 70K requests on
              an average )
            </li>
            <li>
              Developed an internal Pdf tool that includes Splitting, Swapping,
              Rearranging, and Merging any kind of Pdfs.
            </li>
            <li>
              Migration of React Class Components to Functional Components and
              also to Next JS ( SSR ) and also revamping of complete UI for
              online-consultations app and other internal tools.
            </li>
            <li>
              End to end development of Phlebo APP ( Front-End ) which is used
              by all the Phlebotomists. It has features like login, order
              dashboard, camera features, bar-code scanner, etc.
            </li>
            <li>
              End to end development of Provider/Insurer Portal ( Front-End )
              for all the providers and insurers to track each and every case
              detail and to handle daily tasks. Features: Different dashboards
              based on user roles, dynamic Routing, etc.
            </li>
            <li>
              Mentored a team of developers who were working on Front-End
              Offline Consults.
            </li>
          </ul>
        </div>
      ),
      skills:
        'React.js, Next.js, Node.js, Angular, TypeScript, JavaScript, PostGres, Redis, MySQL, AWS SQS, Cloudwatch, S3, Cloudfront, Docker, Jenkins,  Google Analytics, Branch, Clevertap, New-Relic, Re-tool',
    },
    {
      title: 'Jul 2020 - Jan 2022',
      organisation: 'MediBuddy',
      designation: 'SDE I',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
            <li>Development of Medibuddy Gold Page.</li>
            <li>
              Ownership of Medibuddy Internal Tool Procheck for maintaining
              journey of any pre-policy cases.
            </li>
            <li>
              Generation of Digital Medical Examination Report ( DigiMER ) for
              all the insurers ( B2B ) and making sure the reports are generated
              according to their report standards which holds the details of the
              conversion between Doctors and Patients.
            </li>
            <li>
              Doctor Consultation Dashboard where the doctor can ask respective
              questions to the patients ( the questions are dynamic as those
              questions are different for each insurers )
            </li>
          </ul>
        </div>
      ),
      skills:
        'React.js, Next.js, Node.js, Angular, TypeScript, JavaScript, PostGres, Redis, MySQL, AWS SQS, Cloudwatch, S3, Cloudfront, Docker, Jenkins,  Google Analytics, Branch, Clevertap, New-Relic, Re-tool',
    },
    {
      title: 'Jun 2019 - Jun 2020',
      organisation: 'BuildSupply',
      designation: 'Analyst Software Engineer',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
            <li>
              Designed and developed the Material Manager, an end-to-end
              construction-focused inventory management solution using Angular.
              This platform enables customers to efficiently manage project
              procurement and provides real-time tracking of material inventory
              across multiple projects. - 1000+ Cases Handing daily.
            </li>
          </ul>
        </div>
      ),
      skills: 'Angular, Angular Material, PHP, SCSS, JavaScript etc.',
    },
    {
      title: 'May - Jun 2018',
      organisation: 'IIT Kharagpur',
      designation: 'Summer Intern',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
            <li>
              Essential Drug Information System - Developed a comprehensive
              doctor dashboard with a medicine search engine for seamless
              prescription, including the ability to add new medicines to the
              database.
            </li>
          </ul>
        </div>
      ),
      skills: 'Java, JavaScript, HTML, CSS etc.',
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
