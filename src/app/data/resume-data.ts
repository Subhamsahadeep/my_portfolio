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
    'Senior Software Engineer with 6+ years of experience, including 4+ years in customer-facing technical roles (support engineering, solutions engineering, technical escalation). Expert at debugging complex systems through code-level investigation, conducting root cause analysis (RCA), and building internal tools, automation, and diagnostic utilities. Shipped AI-enabled products using Generative AI and LLMs with strong communication skills for the wider audiences.',

  experience: [
    {
      company: 'Travelopia',
      title:
        'Senior Product Engineer — Tech Lead (promoted from Product Engineer)',
      period: 'Oct 2023 — Present',
      location: 'Hybrid, Bangalore',
      bullets: [
        'Served as the escalation point for complex technical issues across 3 cross-functional teams using TypeScript, Node.js (NestJS), and AWS CloudWatch; conducted deep-dive technical sessions to diagnose and resolve architectural and integration challenges, reducing mean resolution time by 40%.',
        'Designed and shipped an AI-enabled Call QA platform using Google Gemini 2.5 Pro and AWS Step Functions, processing 500+ calls/week through a serverless pipeline (Lambda, SQS, audio transcription, PII redaction, AI-driven evaluation with structured outputs); collaborated with data scientists and stakeholders to deliver production-ready solutions.',
        'Established CI/CD pipelines via Git, GitHub Actions, and Docker across a Turborepo monorepo (6 apps, 14+ shared packages) with AWS CDK infrastructure-as-code, automated testing gates (Vitest, Jest), and 60%+ test coverage enforcement; built internal diagnostic utilities and runbooks that reduced deployment failures by 35%.',
        'Performed performance analysis and root cause analysis (RCA) on critical production incidents in a React 18 multi-brand frontend (TypeScript, tRPC, Redis, Chakra UI); resolved page load degradation from 12s to under 400ms through Redis caching, SQS-driven async operations, and component lazy-loading.',
        'Championed AI-driven code review best practices and pull request quality using Cursor AI, Claude Code, and GitHub Copilot; mentored junior engineers on debugging complex systems, troubleshooting, and product architecture.',
      ],
    },
    {
      company: 'MediBuddy',
      title: 'Software Development Engineer II (promoted from SDE I)',
      period: 'Jul 2020 — Oct 2023',
      location: 'Bangalore',
      bullets: [
        'Debugged and resolved complex technical issues across 12 production microservices (Node.js, JavaScript, REST APIs) serving 70K+ daily requests; conducted root cause analysis (RCA) using Datadog APM, Sentry, and AWS CloudWatch, implementing preventive measures that improved response times by 20%.',
        'Built internal tools, automation, and diagnostic utilities using Node.js and PostgreSQL, including an auto-dialer handling 2,400+ cases/day; developed data synchronization pipelines across PostgreSQL and DynamoDB to improve supportability at scale.',
        'Led customer-facing development of the "Gold" subscription feature using React.js and REST APIs, analyzing patterns across the customer base to identify improvements; translated customer feedback into technical solutions increasing user conversion by 25%, managing 3 engineers.',
        'Mentored L1/L2 support engineers on debugging complex systems with Git, GitHub, and CI/CD workflows; contributed to knowledge bases and technical documentation; partnered with product teams to prioritize features, improving observability and debuggability.',
      ],
    },
    {
      company: 'BuildSupply',
      title: 'Software Engineer (Full Stack)',
      period: 'Jun 2019 — Jun 2020',
      location: 'Gurugram',
      bullets: [
        'Developed and maintained a scalable full-stack application (JavaScript, Node.js, PostgreSQL, Git) for real-time procurement tracking, debugging production issues for 1,000+ bulk orders/month and reducing order processing errors by 15%.',
        'Built internal operations dashboard and diagnostic tools using React.js and REST APIs that improved order monitoring accuracy by 30%; provided technical guidance during proof-of-concept implementations and collaborated on feature prioritization based on customer feedback.',
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
      category: 'Technical Skills',
      items:
        'TypeScript, JavaScript, Git, GitHub, CI/CD Pipelines, GitHub Actions, Docker, Debugging Complex Systems, Root Cause Analysis (RCA), Performance Analysis, AI-driven Code Review, Google Gemini 2.5 Pro, Claude, OpenAI GPT, Prompt Engineering, Cursor AI, Claude Code, Node.js (Express, NestJS), React 18, Next.js, tRPC, Prisma ORM, REST APIs, Microservices, PostgreSQL, Redis, DynamoDB, AWS (CDK, Step Functions, Lambda, SQS, CloudWatch), Turborepo, Vitest, Jest, Datadog APM, Sentry, New Relic',
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
