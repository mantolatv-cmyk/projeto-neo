import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Concept from '@/components/Concept';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-pearl dark:bg-neo-charcoal transition-colors duration-700 selection:bg-neo-gold selection:text-neo-pearl overflow-x-hidden">
      <Navbar />
      <Hero />
      <Concept />
      <Portfolio />
    </main>
  );
}
