import { NextResponse } from 'next/server';
import { queryHuggingFace } from '@/app/utils/huggingface';

export async function POST(request: Request) {
  try {
    const { question, context } = await request.json();
    if (!question || !context) {
      return NextResponse.json(
        { error: 'Missing question or context' },
        { status: 400 },
      );
    }

    const data = await queryHuggingFace('deepset/roberta-base-squad2', {
      inputs: { question, context },
    });

    return NextResponse.json({ answer: data.answer, score: data.score });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
