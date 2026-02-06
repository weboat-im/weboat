
import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { Services } from './components/Services.tsx';
import { Features } from './components/Features.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-lime-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Features />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
