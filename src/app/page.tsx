import { lazy, Suspense } from 'react';
import Publications from './components/sections/publications';
import { Landing } from './components/sections/landing';
import { ExperienceDetails } from './components/workExperience/details';

// Lazy load Recommendations and Awards
const Recommendations = lazy(
  () => import('./components/sections/recommendations'),
);
const Awards = lazy(() => import('./components/sections/awards'));
const Contact = lazy(() => import('./components/sections/contact'));

export default function Home() {
  return (
    <main className="bg-black">
      <Landing />
      <ExperienceDetails />
      <Publications />

      {/* Wrap lazy loaded components in Suspense */}
      <Suspense fallback={<div>Loading Recommendations...</div>}>
        <Recommendations />
      </Suspense>

      <Suspense fallback={<div>Loading Awards...</div>}>
        <Awards />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </main>
  );
}
