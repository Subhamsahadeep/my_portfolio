'use client';
import { useState } from 'react';
import {
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  PROJECTS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
  CONTACTS_CONTEXT,
  AWARDS_CONTEXT,
} from '../utils/context';

const DEFAULT_CONTEXT = [
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  PROJECTS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
  CONTACTS_CONTEXT,
  AWARDS_CONTEXT,
].join('\n\n');

const SUGGESTED_QUESTIONS = [
  {
    question: "How many years of professional experience does Subham have?",
    context: PERSONAL_CONTEXT,
  },
  {
    question: "Which companies has Subham worked for and in what roles?",
    context: EXPERIENCE_CONTEXT,
  },
  {
    question: "What are Subham’s core frontend and backend skills?",
    context: TECHNICAL_SKILLS_CONTEXT,
  },
  {
    question: "What performance‑related optimizations has Subham implemented?",
    context: TECHNICAL_SKILLS_CONTEXT,
  },
  {
    question: "Can you list Subham’s key projects and their tech stacks?",
    context: PROJECTS_CONTEXT,
  },
  {
    question: "What awards and recognitions has Subham received?",
    context: AWARDS_CONTEXT,
  },
  {
    question: "What is Subham’s educational background?",
    context: EDUCATION_CONTEXT,
  },
  {
    question: "How can I connect with Subham on social or GitHub?",
    context: CONTACTS_CONTEXT,
  },
];


export default function HuggingFaceQA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function askQuestion(q: string, ctx: string) {
    setLoading(true);
    setError('');
    setAnswer('');
    setScore(null);
    setQuestion(q);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, context: ctx }),
      });
      const data = await res.json();
      if (res.ok) {
        setAnswer(data.answer || 'No answer found.');
        setScore(data.score ?? null);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    askQuestion(question, DEFAULT_CONTEXT);
  }

  return (
    <div className="max-w-xl p-6 space-y-4">
      <div className="mb-4 ">
        {SUGGESTED_QUESTIONS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className="service-boxt text-xs  rounded-lg shadow-md relative bg-[#0e0e0e] cursor-pointer text-xs"
            onClick={() => askQuestion(item.question, item.context)}
            disabled={loading}
          >
            {item.question}
          </button>
        ))}
      </div>
      <form onSubmit={handleAsk} className="flex flex-col gap-4">
        <input
          type="text"
          className="w-full p-4 rounded-md bg-[#181a1c] text-gray-300"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="custom-button float-right"
          disabled={loading || !question.trim()}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div className="p-6 rounded-lg border text-gray-200 border-purple-600 shadow-lg shadow-blue-600/50">
          <strong>Answer:</strong> {answer}
          {score !== null && (
            <span className="ml-2 text-xs text-gray-400">
              (score: {score.toFixed(3)})
            </span>
          )}
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-900 rounded text-red-300 border border-red-700">
          {error}
        </div>
      )}
    </div>
  );
}
