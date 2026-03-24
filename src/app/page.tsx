import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Concept from '@/components/Concept';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F1] dark:bg-[#18181B] transition-colors duration-700 selection:bg-[#FBBF24] selection:text-[#18181B]">
      <Navbar />
      <Hero />
      <Concept />
    </main>
  );
}
