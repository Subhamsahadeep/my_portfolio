import Publications from './components/sections/publications';
import Recommendations from './components/sections/recommendations';
import Awards from './components/sections/awards';
import { Landing } from './components/sections/landing';
import { ExperienceDetails } from './components/workExperience/details';

export default function Home() {
  return (
    <main className="bg-black">
      <Landing />
      <ExperienceDetails />
      <Publications />
      <Recommendations />
      <Awards />
    </main>
  );
}
