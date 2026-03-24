export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  featured: boolean;
  screenshots?: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'MyTCS — Multi-Brand Travel Portal',
    description:
      'Enterprise-scale post-booking travel portal serving three luxury brands — TCS World Travel, Smithsonian Journeys, and Four Seasons — from a single codebase. One Turborepo monorepo with 6 apps and 14+ shared packages renders brand-specific styling, typography, and layouts through a semantic token theming system — zero conditional logic, full visual differentiation.',
    longDescription:
      'The frontend is built with React 18 and Chakra UI using a multi-brand semantic token theming system. The backend runs on NestJS with tRPC v10 exposing 15+ domain routers, validated end-to-end with Zod schemas, protected by Auth0 JWT middleware, and instrumented with Datadog distributed tracing. The data layer is anchored by an 826-line Prisma schema on PostgreSQL, modeling granular permissions (UsersOnTrip roles like TRAVELLER and ASSISTANT), status-tracked traveller preferences with full audit trails. Salesforce serves as the source of truth, queried through a Redis caching layer using a getOrSet pattern that reduced page load times from 12s to under 400ms. Asynchronous operations flow through AWS SQS FIFO queues. Trip content is managed through Sanity.io CMS, and brand-specific trip PDFs are generated on demand using EJS templates. CI/CD runs on GitHub Actions with separated test jobs and 60%+ coverage enforcement via Vitest.',
    tech: [
      'React 18',
      'TypeScript',
      'tRPC',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Auth0',
      'Chakra UI',
      'Turborepo',
      'Sanity.io',
      'Datadog',
      'Vitest',
    ],
    featured: true,
    screenshots: [
      '/projects/mytcs/tcs-login.png',
      '/projects/mytcs/fs-login.png',
      '/projects/mytcs/sm-login.png',
      '/projects/mytcs/checklist.png',
      '/projects/mytcs/fs-dashboard.png',
      '/projects/mytcs/sm-dashboard.png',
      '/projects/mytcs/destination.png',
      '/projects/mytcs/fs-destination.png',
      '/projects/mytcs/sm-destination.png',
    ],
    links: {
      live: 'https://www.travelopia.com/',
    },
  },
  {
    title: 'MyTCS — Payments Portal',
    description:
      'Multi-currency payment processing portal for high-value luxury travel itineraries across three brands. Features a payments dashboard with reservation-level tracking, payment link creation via SoftTrip integration, manual charge processing with credit card fee waiver options, and refund transaction workflows — all PCI-compliant and orchestrated by AWS Step Functions.',
    longDescription:
      'The portal provides a full payment lifecycle management interface: a searchable payments list with status tracking (Active, Overdue), user and date filtering, and brand-level visibility (TCS, Smithsonian, Four Seasons). Payment creation pulls reservation details from SoftTrip by ID and generates secure payment links. Manual charges support USD multi-currency amounts, charge due dates, charge reasons, and configurable credit card fee waivers with reason tracking. Refund transactions retrieve transaction history by SoftTrip reservation ID for targeted partial or full refunds. The backend pipeline orchestrates each payment through a 12-step AWS Step Functions state machine: validation, CyberSource tokenization and charge, SoftTrip financial recording, confirmation email dispatch, and automated refund processing on failure — with retry logic, exponential backoff, and dead-letter queues.',
    tech: [
      'AWS Step Functions',
      'Lambda',
      'CyberSource',
      'NestJS',
      'tRPC',
      'Prisma',
      'PostgreSQL',
      'AWS SQS',
      'TypeScript',
    ],
    featured: true,
    screenshots: [
      '/projects/payments/create-payment.png',
      '/projects/payments/manual-charge.png',
      '/projects/payments/refund.png',
    ],
    links: {
      live: 'https://www.travelopia.com/',
    },
  },
  {
    title: 'Call Compass — AI Call QA Platform',
    description:
      'AI-powered call quality assurance platform with a Call Analysis Dashboard featuring SSO authentication, date/agent/status filtering, and a call list with summary scores, review workflows, and detailed analysis views. The system ingests call recordings from Talkdesk, transcribes them with speaker identification and automatic PII redaction using Google Gemini 2.0 Flash, evaluates agent performance against configurable scoring frameworks using Gemini 2.5 Pro, extracts sales insights, and generates weekly and monthly performance reports — all running serverlessly on AWS.',
    longDescription:
      'The AI pipeline is orchestrated by AWS Step Functions across five stages: an Orchestrator Lambda runs every 6 hours via EventBridge, fetching new recordings from the Talkdesk API; a Transcription Lambda sends audio to Gemini 2.0 Flash Exp, producing structured JSON with timestamps, speaker identification, and automatic PII redaction covering names, phone numbers, addresses, SSNs, credit cards, emails, dates of birth, and government IDs; an Evaluation Lambda feeds transcriptions to Gemini 2.5 Pro, which scores them against customizable evaluation frameworks stored in DynamoDB — each framework defines weighted sections with ClosedEnded and RatingScale criteria, with version control and activation lifecycle management; a Sales Insights stage extracts demographics, trip details, and improvement areas; and a Report Generation Lambda, triggered on weekly and monthly EventBridge schedules, aggregates scores by agent, generates AI-driven strengths and weaknesses summaries, stores results in DynamoDB, and sends formatted reports via AWS SES. The entire prompt engineering layer spans 926 lines of carefully structured Gemini prompts designed for consistent, schema-validated structured outputs using Zod. The infrastructure is defined in a 294-line AWS CDK stack covering Step Functions, Lambda (Node.js 20), DynamoDB with GSIs, EventBridge scheduling, and SES. Batch processing handles concurrent recordings with a configurable concurrency limit (default: 5) and graceful per-recording error isolation. The frontend is a Next.js 15 dashboard with React 19, Radix UI components, and Azure MSAL authentication. Data enrichment pulls agent profiles and guest information from Salesforce.',
    tech: [
      'Next.js 15',
      'React 19',
      'Google Gemini',
      'AWS CDK',
      'Step Functions',
      'Lambda',
      'DynamoDB',
      'EventBridge',
      'AWS SES',
      'TypeScript',
      'Zod',
      'Turborepo',
      'Radix UI',
      'Azure MSAL',
    ],
    featured: true,
    screenshots: [
      '/projects/call-compass/login.png',
      '/projects/call-compass/dashboard.png',
    ],
  },
  {
    title: 'KarmaDaan — Job Matching Platform',
    description:
      'Founded and built end-to-end a bilingual (English/Bengali) job portal for Tripura and Northeast India connecting verified candidates with trusted employers through AI-powered smart matching. Live platform with 122+ active candidates, 11+ verified business partners, and 11+ open job opportunities.',
    longDescription:
      'Full-stack application built with React 18, TypeScript, and Vite on the frontend using Tailwind CSS, Radix UI, Framer Motion, and React Hook Form with Zod validation. The backend runs Express with Drizzle ORM on PostgreSQL, featuring dual authentication flows for job seekers and businesses, JSONB-based job role matching, and trust score verification. Includes i18next internationalization supporting English, Bengali, and Kokborok, dynamic PDF resume and QR code generation via Puppeteer, EmailJS contact integration, and Recharts analytics dashboards. Deployed on Vercel with analytics and speed insights. Features include job seeker registration and application tracking, business dashboards with candidate filtering, real-time job posting management, and mobile-first responsive design.',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Express',
      'Drizzle ORM',
      'PostgreSQL',
      'i18next',
      'Framer Motion',
      'Puppeteer',
      'Vercel',
    ],
    featured: true,
    screenshots: [
      '/projects/karmadaan/homepage.png',
      '/projects/karmadaan/businesses.png',
      '/projects/karmadaan/candidates.png',
      '/projects/karmadaan/jobs.png',
      '/projects/karmadaan/application.png',
    ],
    links: {
      live: 'https://www.karmadaan.com/',
      github: 'https://github.com/Subhamsahadeep/karmadaan',
    },
  },
  {
    title: 'Automated Dialler System',
    description:
      'Insurance business automation platform integrating Kaleyra and Ameyo telephony APIs to replace manual outbound calling workflows. The system automates customer outreach sequences, tracks call dispositions, and routes conversations based on outcomes, significantly reducing agent idle time and improving lead conversion rates across insurance product lines.',
    tech: ['React', 'Node.js', 'TypeScript', 'Kaleyra', 'Ameyo'],
    featured: false,
  },
  {
    title: 'Phlebo App',
    description:
      'End-to-end mobile application for phlebotomists managing the full sample collection lifecycle — from order assignment dashboards and route optimization to on-site camera integration for document capture, barcode scanning for sample tube identification, and real-time GPS tracking for dispatch coordination and estimated arrival updates.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    featured: false,
    screenshots: ['/projects/phlebo/login.png'],
    links: {
      live: 'https://phlebo.medibuddy.in/#/login',
    },
  },
  {
    title: 'Material Manager',
    description:
      'Construction-focused inventory management platform processing 1,000+ daily cases with real-time material tracking across multiple active project sites. Features include stock-level monitoring, material requisition workflows, cross-site transfer tracking, and reporting dashboards that give project managers visibility into consumption patterns and procurement needs.',
    tech: ['Angular', 'Angular Material', 'PHP', 'SCSS'],
    featured: false,
  },
];
