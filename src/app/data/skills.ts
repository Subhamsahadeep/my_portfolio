export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Building pixel-perfect, performant interfaces',
    skills: [
      { name: 'React.js', level: 5 },
      { name: 'Next.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Chakra UI', level: 4 },
      { name: 'Framer Motion', level: 4 },
      { name: 'Angular', level: 3 },
      { name: 'Storybook', level: 4 },
    ],
  },
  {
    title: 'Backend & System Design',
    description: 'Designing scalable distributed systems',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'NestJS', level: 4 },
      { name: 'tRPC', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'Redis', level: 4 },
      { name: 'Prisma', level: 4 },
      { name: 'REST APIs', level: 5 },
      { name: 'Microservices', level: 4 },
    ],
  },
  {
    title: 'AI & GenAI',
    description: 'Building intelligent AI-powered systems',
    skills: [
      { name: 'Google Gemini', level: 4 },
      { name: 'Vertex AI', level: 4 },
      { name: 'LLM Integration', level: 4 },
      { name: 'Structured Outputs', level: 4 },
      { name: 'Prompt Engineering', level: 4 },
      { name: 'AI Pipelines', level: 4 },
      { name: 'PII Redaction', level: 4 },
      { name: 'Vercel AI SDK', level: 3 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deploying and scaling infrastructure',
    skills: [
      { name: 'AWS Lambda', level: 4 },
      { name: 'AWS Step Functions', level: 4 },
      { name: 'AWS CDK', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'GitHub Actions', level: 4 },
      { name: 'DynamoDB', level: 3 },
      { name: 'SQS', level: 4 },
      { name: 'Turborepo', level: 4 },
    ],
  },
  {
    title: 'DSA & Problem Solving',
    description: 'Algorithmic thinking & optimization',
    skills: [
      { name: 'Data Structures', level: 5 },
      { name: 'Algorithms', level: 5 },
      { name: 'System Design', level: 4 },
      { name: 'Dynamic Programming', level: 4 },
      { name: 'Graph Algorithms', level: 4 },
      { name: 'Complexity Analysis', level: 5 },
      { name: 'Design Patterns', level: 4 },
      { name: 'Testing (TDD)', level: 4 },
    ],
  },
];
