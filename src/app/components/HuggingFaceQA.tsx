'use client';
import { useState } from 'react';
import {
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  PROJECTS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
} from '../utils/context';

const DEFAULT_CONTEXT = [
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  PROJECTS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
].join('\n\n');

const SUGGESTED_QUESTIONS = [
  {
    question: "What is Subham Saha's current role?",
    context: EXPERIENCE_CONTEXT,
  },
  {
    question: "List some of Subham's technical skills.",
    context: TECHNICAL_SKILLS_CONTEXT,
  },
  {
    question: 'What are some projects Subham has worked on?',
    context: PROJECTS_CONTEXT,
  },
  {
    question: 'What awards has Subham won?',
    context: EXPERIENCE_CONTEXT,
  },
  {
    question: 'Where did Subham study?',
    context: EDUCATION_CONTEXT,
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
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow space-y-4">
      <div className="mb-4 flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-blue-600 transition"
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
          className="p-3 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading || !question.trim()}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div className="p-4 bg-gray-800 rounded text-green-300 border border-green-700">
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
