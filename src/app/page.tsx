import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Work from '@/components/Work';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
      <AboutMe />

      <Work />
      <Projects />
    </div>
  );
}
