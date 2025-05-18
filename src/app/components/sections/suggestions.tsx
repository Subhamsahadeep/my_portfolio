'use client';
import { AiOutlineSend } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import {
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
  CONTACTS_CONTEXT,
  AWARDS_CONTEXT,
  PUBLICATIONS_CONTEXT,
} from '../../utils/context';
import SectionHeading from '../common/sectionheading';

const DEFAULT_CONTEXT = [
  PERSONAL_CONTEXT,
  TECHNICAL_SKILLS_CONTEXT,
  EXPERIENCE_CONTEXT,
  EDUCATION_CONTEXT,
  CONTACTS_CONTEXT,
  AWARDS_CONTEXT,
  PUBLICATIONS_CONTEXT,
].join('\n\n');

const SUGGESTED_QUESTIONS = [
  {
    label: 'Experience',
    question: 'Which companies has Subham worked for and in what roles?',
    context: EXPERIENCE_CONTEXT,
  },
  {
    label: 'Skills',
    question: "What are Subham's core frontend and backend skills?",
    context: TECHNICAL_SKILLS_CONTEXT,
  },
  {
    label: 'Awards',
    question: 'What awards and recognitions has Subham received?',
    context: AWARDS_CONTEXT,
  },
  {
    label: 'Education',
    question: 'What is Subham’s educational background?',
    context: EDUCATION_CONTEXT,
  },
  {
    label: 'Publications',
    question: 'What are Subham’s publications?',
    context: PUBLICATIONS_CONTEXT,
  },
];

type Message = { question: string; answer: string };

export default function Suggestions() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Track the currently pending question (for showing "You:" + loader while waiting)
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  async function askQuestion(q: string, ctx: string) {
    setPendingQuestion(q);
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, context: ctx }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || 'Something went wrong.');
        setPendingQuestion(null);
        setLoading(false);
        return;
      }

      const data = await res.json();

      // Optional delay to mimic typing effect
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { question: q, answer: data.answer || 'No answer found.' },
        ]);
        setPendingQuestion(null);
        setLoading(false);
      }, 400);
    } catch (err: any) {
      setError(err.message || 'Network error');
      setPendingQuestion(null);
      setLoading(false);
    }
  }

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    await askQuestion(question, DEFAULT_CONTEXT);
    setQuestion('');
  }

  // Update scroll behavior to use the chat container
  useEffect(() => {
    if (chatContainerRef.current && bottomRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, error, pendingQuestion]);

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-10 gap-8">
      <section className="col-span-1 md:col-span-4 flex flex-col items-center md:p-8 sm:p-4">
        <SectionHeading name="Ask my Personal" styledName="Assistant" />
      </section>

      <section className="col-span-1 md:col-span-6 md:p-8 sm:p-4 flex flex-col h-[80vh] p-6 rounded-lg border text-gray-400 border-purple-600 shadow-lg shadow-blue-600/50 bg-[#121212] overflow-hidden">
        {/* Suggested Labels */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-y-auto">
          {SUGGESTED_QUESTIONS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="service-box px-4 py-2  text-xs rounded-lg shadow-md relative bg-[#2d2d2d] cursor-pointer"
              onClick={() => askQuestion(item.question, item.context)}
              disabled={loading}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Chat Thread */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto space-y-6 pt-3 pb-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent"
        >
          {messages.map((msg, idx) => (
            <div key={idx}>
              <div className="flex justify-end">
                <div className="p-2 rounded-lg text-gray-200 shadow-lg max-w-[80%] bg-[#2d2d2d]">
                  <strong className="block text-xs text-white mb-1">
                    You:
                  </strong>
                  {msg.question}
                </div>
              </div>
              <div className="flex justify-start mt-2">
                <div className="p-6 rounded-lg text-gray-200 shadow-lg max-w-[80%] bg-[#37195482]">
                  <strong className="block text-xs text-purple-300 mb-1">
                    Assistant:
                  </strong>
                  {msg.answer}
                </div>
              </div>
            </div>
          ))}

          {/* Pending question + loader */}
          {pendingQuestion && (
            <div>
              <div className="flex justify-end">
                <div className="p-2 rounded-lg border text-gray-200  border-purple-600 shadow-lg shadow-blue-600/50 max-w-[80%] bg-purple-700">
                  <strong className="block text-xs text-white mb-1">
                    You:
                  </strong>
                  {pendingQuestion}
                </div>
              </div>
              <div className="flex justify-start mt-2">
                <div className="p-2 rounded-lg border text-gray-200  border-purple-600 shadow-lg shadow-blue-600/50 max-w-[80%] bg-[#37195482]">
                  <strong className="block text-xs text-purple-300 mb-1">
                    Assistant:
                  </strong>
                  <div className="flex gap-1 text-2xl">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-start">
              <div className="p-6 rounded-lg border text-red-200 border-red-600 shadow-lg shadow-red-800/40 max-w-[80%] bg-[#2a0e0e]">
                Error: {error}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Field */}
        <form
          onSubmit={handleAsk}
          className="w-full mt-4 pt-4 border-t border-gray-700"
        >
          <div className="relative rounded-full shadow-lg bg-[#181a1c] transition-all duration-300">
            <input
              type="text"
              className="w-full px-4 py-3 pr-14 rounded-full bg-transparent text-gray-200 placeholder-gray-500 outline-none"
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={loading}
            />

            <button
              type="submit"
              className="absolute flex right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-700 hover:bg-purple-800 transition-all duration-200 text-white disabled:opacity-50"
              disabled={loading || !question.trim()}
            >
              {loading ? (
                <div className="text-sm w-5 h-5">...</div>
              ) : (
                <AiOutlineSend className="w-5 h-5" />
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
