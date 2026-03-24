# Portfolio — Subham Saha

## Owner
Subham Saha — Senior Product Engineer at Travelopia (Oct 2023–Present). 6+ years experience. Frontend + Backend + AI/GenAI. Based in Bangalore, India.

## Tech Stack
- Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- Dynamic PDF resume via `@react-pdf/renderer` at `/api/resume`
- Theme: Black & white monochrome, Awwwards-inspired. Light/dark toggle via `.light` class on `<html>`
- CSS tokens: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`
- Animations: Framer Motion scroll-reveal, cursor-tracking glow cards, staggered entrances

## Key Files
- `src/app/data/resume-data.ts` — Resume content (edit to tailor for JDs)
- `src/app/data/skills.ts` — Skills categories and levels
- `src/app/data/projects.ts` — Project descriptions
- `src/app/components/workExperience/details.tsx` — Work experience data
- `src/app/api/resume/route.tsx` — PDF generator layout/styling
- `src/app/globals.css` — Theme CSS variables (dark `:root`, light `.light`)
- `resume/resume.tex` — LaTeX source for Overleaf

## Work Repos (for context)
- `/Users/subham/Desktop/Travelopia_Repo/MYTCS/mytcs` — MyTCS travel portal (Turborepo, React, NestJS, tRPC, Prisma, AWS)
- `/Users/subham/Desktop/Travelopia_Repo/CAIL/tcs-call-compass` — Call Compass AI platform (Gemini, Step Functions, CDK)

## Design Principles
- Apple-inspired monochrome: hierarchy through size, weight, opacity (100%/60%/40%)
- No accent colors. Interactive elements use subtle white glow on hover
- Awwwards aesthetic: fluid `clamp()` spacing, Inter font, restrained micro-interactions
- Light mode: cool blue-gray off-white (#F4F5F7) bg, pure white cards with shadows
- Dark mode: #0A0A0A bg, #141414 cards, no shadows

## Dev Workflow
- Use `npm run dev` only (never `npm run build` while dev server runs — corrupts `.next`)
- If blank page: `pkill -f next; rm -rf .next node_modules/.cache; npm run dev`
- Resume PDF: `http://localhost:3000/api/resume`

## Contact Info
- Email: subhamsahadeep@gmail.com
- LinkedIn: linkedin.com/in/subhamsahadeep
- GitHub: github.com/Subhamsahadeep
- Portfolio: subhamsaha.vercel.app
