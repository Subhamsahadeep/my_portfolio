'use client';
import React from 'react';
import { Experience } from './experience';

export function ExperienceDetails() {
  const data = [
    {
      title: 'Oct 2023 - Present',
      organisation: 'Travelopia',
      designation: 'Senior Product Engineer',
      link: 'https://www.travelopia.com/',
      content: (
        <div>
          <ul className="text-gray-400 text-xs md:text-sm  mb-8 list-disc">
          <li>Built a multi-theme post-reservation app for myTCS using Chakra UI semantic tokens, enabling brand-specific styling and reusable components.</li>
          <li>Developed custom React components with Chakra UI’s defineStyle and semantics to ensure consistent UX across themes, tested thoroughly with Storybook.</li>
          <li>Implemented multi-user login with Auth0 and role-based content for personalized experiences.</li>
          <li>Leveraged TDD with Vitest/Jest and React Testing Library, achieving 70%+ test coverage.</li>
          <li>Automated deployments with GitHub Actions.</li>
          <li>Reduced load time from 12s to under 400ms by optimizing Redis caching, SQS, image prefetching, lazy-loading components, and CSS splitting.</li>
          <li>Integrated Sanity CMS for static data fetching and end-to-end content management.</li>
          <li>Developed a customer checklist module that cut completion time by 30%, input errors by 40%, and form abandonment by 15%, while improving first-time submission success by 25% via auto-complete, custom validations, and interactive error handling.</li>
          <li>Created high-performance, brand-specific trip PDFs using EJS and Tailwind CSS with a DRY approach, optimized via on-demand PDF prefetching.</li>
          <li>Improved backend integration with batched HTTP requests using TRPC and Zod for type safety and reusability.</li>
          <li>Coordinated payment flows with AWS Step Functions and Lambda invocations.</li>
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
      link: 'https://www.medibuddy.in/',
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
      link: 'https://www.medibuddy.in/',
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
      designation: 'Software Engineer',
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
      link: 'https://www.iitkgp.ac.in/',
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
      <Experience data={data} />
    </div>
  );
}
