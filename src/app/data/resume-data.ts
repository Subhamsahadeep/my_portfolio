export interface ResumeData {
  header: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
    portfolioDisplay: string;
  };
  summary: string;
  experience: {
    company: string;
    title: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  skills: { category: string; items: string }[];
  projects: { name: string; description: string }[];
  publications: { title: string; venue: string; year: string }[];
  awards: string[];
}

export const resumeData: ResumeData = {
  header: {
    name: 'Subham Saha',
    phone: '+91-7005201073',
    email: 'subhamsahadeep@gmail.com',
    linkedin: 'linkedin.com/in/subhamsahadeep',
    github: 'github.com/Subhamsahadeep',
    portfolio: 'subhamsaha.vercel.app',
    portfolioDisplay: 'My Portfolio',
  },

  summary:
    'Senior Software Engineer with 6+ years of full-stack development experience building scalable and maintainable applications using React, Node.js, and TypeScript. Proven track record of designing and implementing AI-enabled products with Generative AI (Gemini, Claude, GPT), developing REST APIs and microservices on AWS cloud platforms, and managing relational and NoSQL databases. Proficient in DevOps practices, CI/CD pipelines, Docker containerization, and GenAI development tools (Cursor AI, Claude Code, GitHub Copilot). Adept at collaborating with cross-functional teams including data scientists, product managers, and business stakeholders to translate business requirements into technical solutions.',

  experience: [
    {
      company: 'Travelopia',
      title:
        'Senior Product Engineer — Tech Lead (promoted from Product Engineer)',
      period: 'Oct 2023 — Present',
      location: 'Hybrid, Bangalore',
      bullets: [
        'Designed and implemented an AI-enabled Call QA platform using Google Gemini 2.5 Pro — a scalable serverless pipeline for audio transcription, automatic PII redaction, AI-driven agent evaluation with structured outputs, and automated performance reporting; collaborated with cross-functional teams including data scientists and business stakeholders to translate business requirements into technical solutions.',
        'Architected a scalable and maintainable React 18 multi-brand frontend (TypeScript, tRPC, Chakra UI); achieved 40%+ component reuse and reduced page load from 12s to under 400ms through Redis caching, SQS-driven async operations, and component lazy-loading.',
        'Designed a full-stack Node.js (NestJS) backend with Prisma ORM, REST APIs, tRPC with 15+ domain routers, and Zod validation; built AWS Step Functions payment workflows with 12 Lambda steps handling transactions, recording, and automated refund processing.',
        'Established DevOps practices across a Turborepo monorepo (6 apps, 14+ shared packages): AWS CDK infrastructure-as-code, Docker containerization, CI/CD pipelines via GitHub Actions with automated testing gates, and 60%+ test coverage enforcement.',
        'Drove technical innovation by adopting modern frameworks and GenAI tools (Cursor AI, Claude Code with subagents, worktrees, and planning mode); ensured best practices in code reviews, testing, and delivery management across the engineering team.',
      ],
    },
    {
      company: 'MediBuddy',
      title: 'Software Development Engineer II (promoted from SDE I)',
      period: 'Jul 2020 — Oct 2023',
      location: 'Bangalore',
      bullets: [
        'Designed and implemented 12 scalable microservices with AWS CloudWatch monitoring and Slack alerting; re-architected with relational database replicas, advanced caching, and queue-based workflows, improving response times by 20%.',
        'Led development of the "Gold" subscription product, translating business requirements into technical solutions that increased user conversion by 25%; managed 3 developers using React.js with custom components and hooks.',
        'Built REST APIs for real-time doctor–patient communication workflows and automated medical report generation for 300+ insurers, distributed via REST API and SFTP integration.',
        'Developed a full-stack Node.js auto-dialer system executing business-logic-driven calls, handling 2,400+ cases/day; implemented real-time data synchronization across PostgreSQL and NoSQL databases for 70K+ daily requests.',
        'Architected the Phlebo mobile app (React.js) integrating authentication, order management, and barcode scanning; scaled to handle 4,000+ daily orders in metro cities.',
        'Participated in project planning, estimation, and delivery management; collaborated with product managers and business stakeholders to prioritize and deliver features across the platform.',
      ],
    },
    {
      company: 'BuildSupply',
      title: 'Software Engineer (Full Stack)',
      period: 'Jun 2019 — Jun 2020',
      location: 'Gurugram',
      bullets: [
        'Developed a scalable full-stack application for real-time procurement tracking with relational database modeling, managing 1,000+ bulk orders/month.',
        'Built an operations dashboard translating business requirements into technical solutions, improving order monitoring accuracy by 30%.',
      ],
    },
  ],

  education: [
    {
      institution: 'NIT Agartala',
      degree: 'B.Tech Computer Science',
      period: 'Jul 2015 — May 2019',
    },
  ],

  skills: [
    {
      category: 'Backend & Databases',
      items:
        'Node.js (Express, NestJS), TypeScript, Zod, tRPC, Prisma, REST APIs, Microservices, PostgreSQL, MySQL, Redis, DynamoDB (NoSQL)',
    },
    {
      category: 'Frontend',
      items:
        'React 18, Next.js, TypeScript, JavaScript, Tailwind CSS, React Query, React Hook Form, XState, Framer Motion, Chakra UI, Material UI, Storybook',
    },
    {
      category: 'Cloud & DevOps',
      items:
        'AWS (CDK, Step Functions, Lambda, SQS, EventBridge, S3, CloudFront, WAF, CloudWatch, SES, Amplify), Docker, GitHub Actions, CI/CD Pipelines',
    },
    {
      category: 'Generative AI & LLMs',
      items:
        'Google Gemini 2.5 Pro, Claude, OpenAI GPT, Vercel AI SDK, Prompt Engineering, Structured Outputs, PII Redaction Pipelines, Cursor AI, Claude Code (Skills, Subagents, Worktrees, Planning Mode), GitHub Copilot',
    },
    {
      category: 'Tools & Testing',
      items:
        'Vitest, Jest, React Testing Library, Datadog APM, Sentry, New Relic, Storybook, Husky, Lint-Staged',
    },
  ],

  projects: [
    {
      name: 'KarmaDaan (Founder)',
      description:
        'Built a secure platform connecting verified job seekers with trusted businesses in Tripura, streamlining the hiring process.',
    },
    {
      name: 'TradePeeps',
      description:
        'Developed a Next.js-based paper trading platform integrated with Zerodha; enables trade creation, stock search, and community engagement.',
    },
  ],

  publications: [
    {
      title: 'BYOD Supported Multimodal Classroom Interaction',
      venue: 'Elsevier',
      year: '2020',
    },
    {
      title: 'Designing a Mobile based Non-Verbal Classroom Interaction System',
      venue: 'SSRN (158 downloads, 1,284 views)',
      year: '2019',
    },
  ],

  awards: [
    '1st Runners-Up at Feature Factory Hackathon (Pregnancy Tool — maternal health tracking)',
    '"Star of the Month" and "Quarterly Achievers Award" at MediBuddy for outstanding performance',
  ],
};
