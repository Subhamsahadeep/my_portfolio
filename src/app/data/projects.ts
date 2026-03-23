export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  featured: boolean;
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'MyTCS Travel Portal',
    description:
      'Enterprise-scale post-booking travel portal serving three luxury brands — TCS World Travel, Smithsonian Journeys, and Four Seasons — from a single codebase. A Turborepo monorepo comprising 6 applications and 14+ shared packages, the platform handles trip management, document workflows, preference tracking, and multi-currency payment processing for high-value luxury itineraries.',
    longDescription:
      'The frontend is built with React 18 and Chakra UI using a multi-brand semantic token theming system, allowing one codebase to render brand-specific styling, typography, and layouts without conditional logic. The backend runs on NestJS with tRPC v10 exposing 15+ domain routers, each validated end-to-end with Zod schemas, protected by Auth0 JWT middleware, and instrumented with Datadog distributed tracing for production observability. The data layer is anchored by an 826-line Prisma schema on PostgreSQL, modeling granular permissions (UsersOnTrip roles like TRAVELLER and ASSISTANT), status-tracked traveller preferences with full audit trails, and multi-currency payment records. Salesforce serves as the source of truth for trip and guest data, queried through a Redis caching layer using a getOrSet pattern that reduced page load times from 12 seconds to under 400ms. Asynchronous operations — checklist updates, notification dispatch — flow through AWS SQS FIFO queues for guaranteed ordering. The payment pipeline is orchestrated by AWS Step Functions with 12 Lambda steps handling CyberSource transaction processing, SoftTrip financial recording, automated failure notification emails, and refund workflows. Trip content is managed through a Sanity.io CMS studio, and brand-specific trip PDFs are generated on demand using EJS templates with Tailwind CSS styling and intelligent prefetching. CI/CD runs on GitHub Actions with separated frontend and backend test jobs, type checking gates, and affected-test scripts. The test suite uses Vitest with React Testing Library, enforcing a 60%+ statement coverage threshold.',
    tech: [
      'React 18',
      'TypeScript',
      'tRPC',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'AWS Step Functions',
      'AWS SQS',
      'Auth0',
      'Chakra UI',
      'Turborepo',
      'Sanity.io',
      'Datadog',
      'Vitest',
    ],
    featured: true,
    links: {
      live: 'https://www.travelopia.com/',
    },
  },
  {
    title: 'Call Compass — AI Call QA Platform',
    description:
      'AI-powered call quality assurance platform that replaces manual call review with an automated multi-stage pipeline. The system ingests call recordings from Talkdesk, transcribes them with speaker identification and automatic PII redaction using Google Gemini 2.0 Flash, evaluates agent performance against configurable scoring frameworks using Gemini 2.5 Pro, extracts sales insights, and generates weekly and monthly performance reports delivered via email — all running serverlessly on AWS.',
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
  },
  {
    title: 'Material Manager',
    description:
      'Construction-focused inventory management platform processing 1,000+ daily cases with real-time material tracking across multiple active project sites. Features include stock-level monitoring, material requisition workflows, cross-site transfer tracking, and reporting dashboards that give project managers visibility into consumption patterns and procurement needs.',
    tech: ['Angular', 'Angular Material', 'PHP', 'SCSS'],
    featured: false,
  },
];
