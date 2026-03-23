import { lazy, Suspense } from 'react';
import { Navbar } from './components/navigation/navbar';
import { Hero } from './components/sections/hero';
import { Skills } from './components/sections/skills';
import { ExperienceDetails } from './components/workExperience/details';
import Projects from './components/sections/projects';
import { Resume } from './components/sections/resume';
import { Footer } from './components/sections/footer';

const PublicationsAwards = lazy(
  () => import('./components/sections/publications'),
);
const Recommendations = lazy(
  () => import('./components/sections/recommendations'),
);
const Contact = lazy(() => import('./components/sections/contact'));

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <ExperienceDetails />
      <Projects />
      <Resume />

      <Suspense>
        <PublicationsAwards />
      </Suspense>
      <Suspense>
        <Recommendations />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
}
