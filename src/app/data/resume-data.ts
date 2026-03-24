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
  publications: { title: string; venue: string; year: string; link?: string }[];
  awards: { text: string; link?: string }[];
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
    'Senior Software Engineer with **6+ years of experience** designing, building, and scaling high-traffic production systems across the full stack — from performant React frontends to distributed backend services with robust CI/CD, observability, and infrastructure-as-code. Led cross-functional engineering teams to ship **AI-powered products using LLMs and Generative AI**, driving measurable gains in latency reduction, system reliability, and developer productivity. Proven track record of owning system design end-to-end, mentoring engineers, and turning ambiguous technical challenges into scalable, well-architected solutions.',

  experience: [
    {
      company: 'Travelopia',
      title:
        'Senior Product Engineer — Tech Lead (promoted from Product Engineer)',
      period: 'Oct 2023 — Present',
      location: 'Hybrid, Bangalore',
      bullets: [
        'Led architecture and technical direction across **3 cross-functional teams**, owning system design decisions in TypeScript, Node.js (NestJS), and AWS; drove deep-dive debugging sessions and established observability patterns with CloudWatch that **reduced mean resolution time by 40%**.',
        'Designed and shipped an **AI-enabled Call QA platform** using Google Gemini 2.5 Pro and AWS Step Functions, processing **500+ calls/week** through a serverless pipeline (Lambda, SQS, audio transcription, PII redaction, AI-driven evaluation with structured outputs); collaborated with data scientists and stakeholders to deliver production-ready solutions.',
        'Established CI/CD pipelines via Git, GitHub Actions, and Docker across a **Turborepo monorepo (6 apps, 14+ shared packages)** with AWS CDK infrastructure-as-code, automated testing gates (Vitest, Jest), and **75%+ test coverage** enforcement; built internal diagnostic utilities and runbooks that **reduced deployment failures by 35%**.',
        'Performed performance analysis and root cause analysis (RCA) on critical production incidents in a React 18 multi-brand frontend (TypeScript, tRPC, Redis, Chakra UI); **resolved page load degradation from 12s to under 400ms** through Redis caching, SQS-driven async operations, and component lazy-loading.',
        'Championed AI-driven code review best practices and pull request quality using Cursor AI, Claude Code, and GitHub Copilot; mentored junior engineers on debugging complex systems, troubleshooting, and product architecture.',
      ],
    },
    {
      company: 'MediBuddy',
      title: 'Software Development Engineer II (promoted from SDE I)',
      period: 'Jul 2020 — Oct 2023',
      location: 'Bangalore',
      bullets: [
        'Debugged and resolved complex technical issues across **12 production microservices** (Node.js, JavaScript, REST APIs) serving **70K+ daily requests**; conducted root cause analysis (RCA) using Datadog APM, Sentry, and AWS CloudWatch, **improving response times by 20%**.',
        'Built internal tools, automation, and diagnostic utilities using Node.js and PostgreSQL, including an **auto-dialer handling 2,400+ cases/day**; developed data synchronization pipelines across PostgreSQL and DynamoDB to improve supportability at scale.',
        'Led customer-facing development of the **"Gold" subscription feature** using React.js and REST APIs, analyzing patterns across the customer base to identify improvements; translated customer feedback into technical solutions **increasing user conversion by 25%**, managing 3 engineers.',
        'Mentored L1/L2 support engineers on debugging complex systems with Git, GitHub, and CI/CD workflows; contributed to knowledge bases and technical documentation; partnered with product teams to prioritize features, improving observability and debuggability.',
      ],
    },
    {
      company: 'BuildSupply',
      title: 'Software Engineer (Full Stack)',
      period: 'Jun 2019 — Jun 2020',
      location: 'Gurugram',
      bullets: [
        'Designed and developed a full-stack construction inventory management platform (Angular.js, Angular Material, Node.js, PostgreSQL) enabling real-time procurement tracking across multiple project sites, processing **1,000+ bulk orders/month**.',
        'Built an internal operations dashboard with tabular analytics and REST APIs that **improved order inflow monitoring accuracy by 30%**; owned feature development end-to-end from database schema design to UI, collaborating with product on prioritization based on customer feedback.',
      ],
    },
  ],

  education: [
    {
      institution:
        'National Institute of Technology, Agartala ( NIT Agartala )',
      degree: 'B.Tech Computer Science and Engineering',
      period: 'Jul 2015 — May 2019',
    },
  ],

  skills: [
    {
      category: 'Frontend',
      items:
        'Next.js, React, TypeScript, JavaScript, Tailwind CSS, React Query, Framer Motion, Chakra UI, Storybook',
    },
    {
      category: 'Backend',
      items:
        'Node.js, Express.js , NestJS, tRPC, Zod, Prisma ORM, PostgreSQL, Redis, DynamoDB, REST APIs, Microservices',
    },
    {
      category: 'Cloud & Infra',
      items:
        'AWS (EC2, Lambda, Step Functions, S3, SQS, EventBridge, API Gateway, CloudFront, WAF, CloudWatch, Amplify, CDK), Docker, CI/CD, GitHub Actions, Husky, Lint-Staged',
    },
    {
      category: 'GenAI & LLMs',
      items:
        'Google Gemini, AWS Bedrock, OpenRouter, Prompt Engineering, Cursor AI, Claude Code ( Skills, Subagents, Worktrees )',
    },
    {
      category: 'Testing & Observability',
      items:
        'Jest, Vitest, React Testing Library, Datadog APM, Sentry, New Relic',
    },
  ],

  projects: [
    {
      name: 'KarmaDaan (Founder)',
      description:
        'Built a secure platform connecting verified job seekers with trusted businesses in Tripura.',
    },
    {
      name: 'TradePeeps',
      description:
        'Developed a Next.js-based paper trading platform integrated with Zerodha; enables trade creation, stock search, and engagement.',
    },
  ],

  publications: [
    {
      title: 'BYOD Supported Multimodal Classroom Interaction',
      venue: 'Elsevier',
      year: '2020',
      link: 'https://www.sciencedirect.com/science/article/pii/S1877050920308309?via%3Dihub',
    },
    {
      title: 'Designing a Mobile based Non-Verbal Classroom Interaction System',
      venue: 'SSRN (158 downloads, 1,284 views)',
      year: '2019',
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3361038',
    },
  ],

  awards: [
    {
      text: '1st Runners-Up at Feature Factory Hackathon (Pregnancy Tool — maternal health tracking)',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6974667584759627776/',
    },
    {
      text: '"Star of the Month" and "Quarterly Achievers Award" at MediBuddy for outstanding performance',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6831569980283244544/',
    },
  ],
};
