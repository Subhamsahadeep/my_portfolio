import Awards from './components/Awards';
import { Experience } from './components/Experience';
import Publications from './components/Publications';
import Recommendations from './components/Recommendations';
import { Vortex } from './components/Vortex';

export default function Home() {
  return (
    <main className="bg-black">
      <Vortex />
      <Experience />
      <Publications />
      <Recommendations />
      <Awards />
    </main>
  );
}
