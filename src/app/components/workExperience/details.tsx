'use client';
import React from 'react';
import { Experience } from './experience';

export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface ExperienceAchievement {
  text: string;
  isHighlight?: boolean;
}

export interface ExperienceData {
  period: string;
  organisation: string;
  designation: string;
  link?: string;
  metrics: ExperienceMetric[];
  achievements: ExperienceAchievement[];
  skills: string[];
}

const experienceData: ExperienceData[] = [
  {
    period: 'Oct 2023 — Present',
    organisation: 'Travelopia',
    designation: 'Senior Product Engineer',
    link: 'https://www.travelopia.com/',
    metrics: [
      { value: '12s → 400ms', label: 'Page Load' },
      { value: '14+', label: 'Shared Packages' },
      { value: '3', label: 'Brand Themes' },
    ],
    achievements: [
      {
        text: 'Architected multi-tenant post-booking platform (myTCS) serving 3 luxury travel brands (TCS, Smithsonian, Four Seasons) with Chakra UI semantic token theming — each brand runs identical code with brand-specific styling, config, and content filtering',
        isHighlight: true,
      },
      {
        text: 'Reduced page load from 12s to under 400ms by implementing Redis getOrSet caching on Salesforce queries, SQS FIFO queues for async operations, image prefetching, component lazy-loading, and CSS code-splitting',
        isHighlight: true,
      },
      {
        text: 'Built AI-powered Call QA platform (Call Compass) with Google Gemini 2.5 Pro — multi-stage pipeline: audio transcription with automatic PII redaction → framework-based evaluation with Zod structured outputs → sales insights extraction → automated weekly/monthly agent performance reports',
        isHighlight: true,
      },
      {
        text: 'Designed Prisma schema with granular permission model (UsersOnTrip roles), status-tracked preference entities with audit trails (created/updated/requested/confirmed/completed), and multi-currency payment/transaction sync models',
        isHighlight: false,
      },
      {
        text: 'Engineered type-safe API layer with tRPC v10 + Zod — comprehensive middleware stack for Auth0 JWT validation, trip-level authorization, Datadog distributed tracing, and resource cleanup across 15+ domain routers',
        isHighlight: true,
      },
      {
        text: 'Built customer checklist module with task-based form submission, Salesforce Chatter field tracking for async notifications, and complex visibility logic — reduced completion time by 30%, input errors by 40%, and form abandonment by 15%',
        isHighlight: true,
      },
      {
        text: 'Orchestrated payment flows using AWS Step Functions with Lambda invocations — CyberSource transaction recording, SoftTrip integration, automated failure emails, and refund processing across 12 workflow steps',
        isHighlight: false,
      },
      {
        text: 'Implemented Auth0 multi-user authentication with role-based content (TRAVELLER/ASSISTANT) and built a state machine (XState) for auth flow management with session persistence',
        isHighlight: false,
      },
      {
        text: 'Managed Turborepo monorepo with 6 apps and 14+ shared packages — brand theming, PDF generation (EJS + Tailwind), email templates, spreadsheet exports, Salesforce/AWS clients, and payment processing libraries',
        isHighlight: false,
      },
      {
        text: 'Streamlined CI/CD pipeline with GitHub Actions — separated frontend/backend unit test jobs, added backend type checking, implemented caching for type checks, and created affected-test scripts for pre-commit validation',
        isHighlight: false,
      },
    ],
    skills: [
      'React 18',
      'TypeScript',
      'tRPC',
      'NestJS',
      'Chakra UI',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Zod',
      'Auth0',
      'Salesforce',
      'AWS CDK',
      'Step Functions',
      'Lambda',
      'DynamoDB',
      'SQS',
      'Google Gemini',
      'Vertex AI',
      'Datadog',
      'Docker',
      'GitHub Actions',
      'Turborepo',
      'Vitest',
      'Storybook',
    ],
  },
  {
    period: 'Jan 2022 — Oct 2023',
    organisation: 'MediBuddy',
    designation: 'SDE II',
    link: 'https://www.medibuddy.in/',
    metrics: [
      { value: '65 → 80', label: 'Accessibility' },
      { value: '75 → 92', label: 'SEO Score' },
      { value: '70K+', label: 'Daily Requests' },
    ],
    achievements: [
      {
        text: 'Improved Core Web Vitals across the platform — raised Lighthouse Accessibility from 65 to 80 and SEO from 75 to 92 through semantic HTML, image optimization, and meta tag restructuring',
        isHighlight: true,
      },
      {
        text: 'Built real-time case data syncing tool for analytics handling 70K+ average daily requests — enabling cross-insurer data visibility for business intelligence',
        isHighlight: true,
      },
      {
        text: 'Implemented Automated Dialler integrating Kaleyra and Ameyo APIs for the insurance business segment — eliminated manual calling workflows and measurably improved customer conversion rates',
        isHighlight: true,
      },
      {
        text: 'Developed internal PDF tool supporting splitting, swapping, rearranging, and merging operations — adopted across claims processing teams',
        isHighlight: false,
      },
      {
        text: 'Led migration from React Class Components to Functional Components and Next.js SSR — improved SEO, reduced bundle size, and established modern patterns for the team',
        isHighlight: false,
      },
      {
        text: 'Built end-to-end Phlebo App with order dashboard, camera integration, and barcode scanning for field phlebotomists',
        isHighlight: false,
      },
      {
        text: 'Developed Provider/Insurer Portal with role-based dashboards, dynamic routing, and multi-tenant data isolation serving all B2B partners',
        isHighlight: false,
      },
      {
        text: 'Mentored a team of frontend developers on React best practices, code review standards, and testing strategies for offline consultations module',
        isHighlight: false,
      },
    ],
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'MySQL',
      'AWS SQS',
      'S3',
      'CloudFront',
      'Docker',
      'Jenkins',
      'Google Analytics',
      'CleverTap',
      'New Relic',
    ],
  },
  {
    period: 'Jul 2020 — Jan 2022',
    organisation: 'MediBuddy',
    designation: 'SDE I',
    link: 'https://www.medibuddy.in/',
    metrics: [],
    achievements: [
      {
        text: 'Developed MediBuddy Gold Page — premium membership onboarding flow with payment integration',
        isHighlight: false,
      },
      {
        text: 'Owned Procheck internal tool end-to-end — managing the complete lifecycle of pre-policy medical examination cases across insurers',
        isHighlight: false,
      },
      {
        text: "Built Digital Medical Examination Report (DigiMER) generation system — dynamic templates conforming to each insurer's report standards, capturing doctor-patient consultation data",
        isHighlight: true,
      },
      {
        text: 'Developed Doctor Consultation Dashboard with dynamic, insurer-specific question flows — questions rendered based on insurer configuration and case type',
        isHighlight: false,
      },
    ],
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'MySQL',
      'AWS',
      'Docker',
      'Jenkins',
    ],
  },
  {
    period: 'Jun 2019 — Jun 2020',
    organisation: 'BuildSupply',
    designation: 'Software Engineer',
    metrics: [
      { value: '1000+', label: 'Daily Cases' },
      { value: '15%', label: 'Error Reduction' },
      { value: '30%', label: 'Monitoring Accuracy' },
    ],
    achievements: [
      {
        text: 'Designed and developed Material Manager — end-to-end construction inventory management platform handling 1000+ daily procurement cases with real-time stock tracking, requisition workflows, and cross-site material transfers across multiple active project sites',
        isHighlight: true,
      },
      {
        text: 'Built internal operations dashboard with tabular analytics for procurement monitoring — provided project managers real-time visibility into material consumption patterns, inflow tracking, and stock levels, improving order monitoring accuracy by 30%',
        isHighlight: true,
      },
      {
        text: 'Owned feature development end-to-end from database schema design to UI — implemented bulk order processing pipeline handling 1,000+ orders/month, reducing order processing errors by 15% through input validation and automated status tracking',
        isHighlight: false,
      },
    ],
    skills: [
      'Angular',
      'Angular Material',
      'PHP',
      'Node.js',
      'PostgreSQL',
      'SCSS',
      'JavaScript',
      'REST APIs',
      'Git',
    ],
  },
  {
    period: 'May — Jun 2018',
    organisation: 'IIT Kharagpur',
    designation: 'Summer Intern',
    link: 'https://www.iitkgp.ac.in/',
    metrics: [],
    achievements: [
      {
        text: 'Built Essential Drug Information System — doctor dashboard with medicine search engine for seamless prescription management and database contribution',
        isHighlight: false,
      },
    ],
    skills: ['Java', 'JavaScript', 'HTML', 'CSS'],
  },
];

export function ExperienceDetails() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="w-full">
        <Experience data={experienceData} />
      </div>
    </section>
  );
}
