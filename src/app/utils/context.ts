export const PERSONAL_CONTEXT = `
You are a dedicated personal assistant for Subham Saha. All your answers must be based only on the information in the “Personal Context” section.  
If the user’s question falls outside that scope, respond with: “I’m sorry, I don’t have that information.”

1. Name: Subham Saha  
2. Role: Senior Software Engineer  
3. Current Location: Bangalore, India  
4. Current Company: Travelopia  
5. Years of Experience: 6+ years  

6. Professional Summary:  
   – 6+ years building scalable web applications  
   – Expert in React, Next.js, TypeScript, Node.js, and Express  

7. Publications:
   • **Designing a Mobile-based Non-Verbal Classroom Interaction System**  
   • **BYOD Supported Multimodal Classroom Interaction**  `;

export const PUBLICATIONS_CONTEXT = `
1. **Designing a Mobile-based Non-Verbal Classroom Interaction System**  
*International Journal of Computational Intelligence & IoT, Vol. 2, No. 3, 2018*  
Authors: Subham Saha, Sandipan Saha, Suman Deb  
Institution: National Institute of Technology (NIT), Agartala - CSE Department  
Date Written: 2018 (Published March 28, 2019)  
[SSRN Link](https://ssrn.com/abstract=3361038)

**Abstract:**  
Affordable technology has made mobile devices ubiquitous in everyday life, influencing people’s activities and behavior. This study explores the use of mobile technology as an interactive tool in higher education classrooms — environments where one teacher addresses many students. The challenge lies in engaging students who learn at different paces and cognitive levels, especially with the rise of MOOCs and self-paced learning content. The paper proposes a Rapid Responsive Optical Marker System (RROMS) to collect nonverbal feedback quickly and efficiently, enabling formative interaction without extra infrastructure. The results show that rapid interaction is possible in one-to-many settings via mobile-supported, optical marker-based frameworks, enhancing classroom engagement and teacher insight into learner activity.

2 **BYOD Supported Multimodal Classroom Interaction**  
Author links: Subham Saha, Suman Deb  
Published in Procedia Computer Science (DOI: 10.1016/j.procs.2020.03.364)  
Open access under Creative Commons license.

**Abstract:**  
The classroom remains a unique face-to-face interaction space where teaching typically happens in a broadcast manner. However, diverse student cognitive levels require more interactive approaches. Despite advances in teaching technologies, classroom interaction methods remain underdeveloped. This work investigates Bring Your Own Device (BYOD) systems — including mobile phones, tablets, and laptops — as cost-effective tools for enhancing classroom interaction. Using a multilayer interaction model, teachers receive feedback while students can express doubts non-verbally, helping preserve privacy and reduce the stigma of public questioning. The study combines screen tapping and feedback to facilitate natural, comfortable interactions. Results indicate that mobile devices significantly boost student engagement and active participation in traditional classroom pedagogy, turning classrooms into augmented spaces that offer teachers deeper insights into individual students.

`;

export const TECHNICAL_SKILLS_CONTEXT = `
1. Frontend:  
   – React.js  
   – Next.js (App & Pages Routers)  
   – Hooks & Server Components  
   – Redux / Zustand / Context API  
   – Tailwind CSS, Styled‑components  
   – Framer Motion  

2. Backend:  
   – Node.js & Express.js  
   – RESTful APIs  
   – Serverless functions  
   – TRPC & Zod  

3. Performance:  
   – Web Vitals  
   – SSR/CSR strategies  
   – Code splitting & lazy loading  
   – SEO & PWA best practices  

4. DevOps & Testing:  
   – Git / GitHub  
   – CI/CD (GitHub Actions, Jenkins)  
   – TDD (Vitest, Jest, RTL)  
   – E2E (Cypress)  
   – Performance & accessibility testing  
`;

export const EXPERIENCE_CONTEXT = `
Oct 2023 - Present
Organisation: Travelopia
Designation: Senior Product Engineer
Link: https://www.travelopia.com/

Built a multi-theme post-reservation app for myTCS using Chakra UI semantic tokens, enabling brand-specific styling and reusable components. Developed custom React components with Chakra UI’s defineStyle and semantics to ensure consistent UX across themes, tested thoroughly with Storybook.

Implemented multi-user login with Auth0 and role-based content for personalized experiences. Leveraged TDD with Vitest/Jest and React Testing Library, achieving 70%+ test coverage. Automated deployments with GitHub Actions.

Reduced load time from 12s to under 400ms by optimizing Redis caching, SQS, image prefetching, lazy-loading components, and CSS splitting. Integrated Sanity CMS for static data fetching and end-to-end content management.

Developed a customer checklist module that cut completion time by 30%, input errors by 40%, and form abandonment by 15%, while improving first-time submission success by 25% via auto-complete, custom validations, and interactive error handling.

Created high-performance, brand-specific trip PDFs using EJS and Tailwind CSS with a DRY approach, optimized via on-demand PDF prefetching.

Improved backend integration with batched HTTP requests using TRPC and Zod for type safety and reusability. Coordinated payment flows with AWS Step Functions and Lambda invocations.

Improved app performance from 10 seconds to 500 milliseconds with a cache layer, enhancing user experience. Leveraged SQS for faster write operations and asynchronous data syncing, optimizing performance further.
Skills: Tailwind, Bootstrap, NextJs, Node.js, Express.js, ReactJs, JavaScript, TypeScript, React Query, React Hook Form, Zod, TRPC, Chakra UI, Jenkins, GIT Actions, Docker, StoryBook, Jest, React Testing Library, Husky, Lint-Stage, AWS, Redis, Clevertap, Sentry, DataDog, Newrelic

Jan 2022 - Oct 2023
Organisation: MediBuddy
Designation: SDE II
Link: https://www.medibuddy.in/

Improving Medibuddy’s Core Vitals [ LCP , TBT ] ( Accessibility Score 65 to 80 and SEO Score 75 to 92 )

Implemented Automated Dialler for Insurance business segment. This development helped to minimise manual calling to customers and more conversion of calls. [ Integrations with Kaleyra and Ameyo ]

Real-time syncing of all the case data for different insurers - Internal tool developed for Analytics. ( receiving 70K requests on an average )

Developed an internal Pdf tool that includes Splitting, Swapping, Rearranging, and Merging any kind of Pdfs.

Migration of React Class Components to Functional Components and also to Next JS ( SSR ) and also revamping of complete UI for online-consultations app and other internal tools.

End to end development of Phlebo APP ( Front-End ) which is used by all the Phlebotomists. It has features like login, order dashboard, camera features, bar-code scanner, etc.

End to end development of Provider/Insurer Portal ( Front-End ) for all the providers and insurers to track each and every case detail and to handle daily tasks. Features: Different dashboards based on user roles, dynamic Routing, etc.

Mentored a team of developers who were working on Front-End Offline Consults.
Skills: React.js, Next.js, Node.js, Angular, TypeScript, JavaScript, PostGres, Redis, MySQL, AWS SQS, Cloudwatch, S3, Cloudfront, Docker, Jenkins, Google Analytics, Branch, Clevertap, New-Relic, Re-tool

Jul 2020 - Jan 2022
Organisation: MediBuddy
Designation: SDE I
Link: https://www.medibuddy.in/

Development of Medibuddy Gold Page.

Ownership of Medibuddy Internal Tool Procheck for maintaining journey of any pre-policy cases.

Generation of Digital Medical Examination Report ( DigiMER ) for all the insurers ( B2B ) and making sure the reports are generated according to their report standards which holds the details of the conversion between Doctors and Patients.

Doctor Consultation Dashboard where the doctor can ask respective questions to the patients ( the questions are dynamic as those questions are different for each insurers )
Skills: React.js, Next.js, Node.js, Angular, TypeScript, JavaScript, PostGres, Redis, MySQL, AWS SQS, Cloudwatch, S3, Cloudfront, Docker, Jenkins, Google Analytics, Branch, Clevertap, New-Relic, Re-tool

Jun 2019 - Jun 2020
Organisation: BuildSupply
Designation: Software Engineer

Designed and developed the Material Manager, an end-to-end construction-focused inventory management solution using Angular. This platform enables customers to efficiently manage project procurement and provides real-time tracking of material inventory across multiple projects. - 1000+ Cases Handling daily.
Skills: Angular, Angular Material, PHP, SCSS, JavaScript etc.

May - Jun 2018
Organisation: IIT Kharagpur
Designation: Summer Intern
Link: https://www.iitkgp.ac.in/

Essential Drug Information System - Developed a comprehensive doctor dashboard with a medicine search engine for seamless prescription, including the ability to add new medicines to the database.
Skills: Java, JavaScript, HTML, CSS etc.
`;

export const EDUCATION_CONTEXT = `NIT Agartala — B.Tech in CSE (2015–2019), CGPA 8.38/10.
Studied in RKMV — Senior School (2014–2015): 93%.
Studied in RKMV — Secondary School (2013–2014): 95%.
`;

export const CONTACTS_CONTEXT = `
1. GitHub: github.com/Subhamsahadeep  
2. LinkedIn: linkedin.com/in/subhamsahadeep`;

export const AWARDS_CONTEXT = `
1. MediOwls Hackathon 1st Runner‑Up  
2. MediBuddy Achiever’s Award (Ownership)  
3. LABS Hackathon Winner  
4. Multiple “Star of the Month” recognitions`;
