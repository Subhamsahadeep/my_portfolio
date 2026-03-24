---
name: tailor-resume
description: Tailor the resume PDF for a specific job description
user_invocable: true
---

The user will paste a Job Description (JD). Your task:

1. Read `src/app/data/resume-data.ts` to see current resume content
2. Analyze the JD for key requirements: tech stack, experience level, domain focus
3. Update `resume-data.ts`:
   - Reorder experience bullets to prioritize JD-matching achievements first
   - Adjust skill categories to highlight JD-relevant tech (reorder items within categories)
   - Ensure the most relevant work experience bullets are prominent
   - Do NOT fabricate experience — only reorder and emphasize existing content
4. Verify it still fits 1 page: `curl -s http://localhost:3000/api/resume -o /tmp/test.pdf && file /tmp/test.pdf`
5. Tell the user what you changed and why

The JD text follows:

$ARGUMENTS
