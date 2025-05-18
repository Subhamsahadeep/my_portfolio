export async function queryHuggingFace(model: string, payload: any) {
  const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;
  if (!HF_TOKEN) throw new Error('Missing Hugging Face token');
  const res = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
