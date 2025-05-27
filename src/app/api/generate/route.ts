import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!;
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(req: NextRequest) {
  try {
    const { question, context } = await req.json();

    if (!question || !context) {
      return NextResponse.json(
        { error: 'Missing question or context' },
        { status: 400 },
      );
    }

    const openRouterRes = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'SubhamSaha-AI',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.3-8b-instruct:free',
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: question },
        ],
      }),
    });

    const data = await openRouterRes.json();

    if (!openRouterRes.ok) {
      return NextResponse.json(
        { error: data.error || 'Failed to get response from OpenRouter' },
        { status: 500 },
      );
    }

    const answer = data.choices?.[0]?.message?.content ?? 'No answer found.';

    // Format the answer as JSON by replacing newlines and formatting list items
    const formattedAnswer = {
      content: answer,
      format: {
        type: answer.includes('1.') ? 'list' : 'text',
        hasCompanyInfo:
          answer.toLowerCase().includes('company') ||
          answer.toLowerCase().includes('worked'),
        hasPublications: answer.toLowerCase().includes('publication'),
      },
    };

    return NextResponse.json(formattedAnswer);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong.' },
      { status: 500 },
    );
  }
}
