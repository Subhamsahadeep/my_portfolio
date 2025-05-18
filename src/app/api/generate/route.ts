// app/api/generate/route.ts (or pages/api/generate.ts)
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY!,
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000', // Replace with your site URL
    'X-Title': 'SubhamSaha-AI', // Replace with your site name
  },
});

export async function POST(req: NextRequest) {
  try {
    const { question, context } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3.3-8b-instruct:free',
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: question },
      ],
    });

    const answer =
      completion.choices?.[0]?.message?.content ?? 'No answer found.';

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 },
    );
  }
}
