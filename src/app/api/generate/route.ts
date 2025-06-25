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

    if (!OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 },
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
        model: 'deepseek/deepseek-r1-0528-qwen3-8b:free',
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

    // Function to strip markdown formatting
    const stripMarkdown = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers
        .replace(/\*(.*?)\*/g, '$1') // Remove italic markers
        .replace(/`(.*?)`/g, '$1') // Remove code markers
        .replace(/#{1,6}\s/g, '') // Remove heading markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Convert links to just text
    };

    const cleanAnswer = stripMarkdown(answer);

    // Format the answer as JSON by replacing newlines and formatting list items
    const formattedAnswer = {
      content: cleanAnswer,
      format: {
        type: cleanAnswer.includes('1.') ? 'list' : 'text',
        hasCompanyInfo:
          cleanAnswer.toLowerCase().includes('company') ||
          cleanAnswer.toLowerCase().includes('worked'),
        hasPublications: cleanAnswer.toLowerCase().includes('publication'),
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
