
import Awards from "./components/Awards";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Recommendations from "./components/Recommendations";
import { Vortex } from "./components/Vortex";


export default function Home() {
  return (
    <main>
      <Vortex />
      <Experience />
      <Publications />
      <Recommendations />
      <Awards />
    </main>
  );
}
