import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import MVPCalculator from '@/components/MVPCalculator';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Technologies />
      <MVPCalculator />
      <About />
      <Contact />
    </main>
  );
}