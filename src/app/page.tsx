import Awards from './components/Awards';
import { Experience } from './components/Experience';
import Publications from './components/Publications';
import Recommendations from './components/Recommendations';
import { Vortex } from './components/Vortex';

export default function Home() {
  return (
    <main>
      <Vortex />
      <div className="bg-black">
      <Experience />
      <Publications />
      <Recommendations />
      <Awards />
      </div>
    </main>
  );
}
