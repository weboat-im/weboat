import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

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