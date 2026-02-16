import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import ValueProps from './components/ValueProps';
import ProcessFlow from './components/ProcessFlow';
import TeamSection from './components/TeamSection';
import WallOfLove from './components/WallOfLove';
import FAQ from './components/FAQ';
import CloserSection from './components/CloserSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProofBar />
        <ValueProps />
        <ProcessFlow />
        <TeamSection />
        <WallOfLove />
        <FAQ />
        <CloserSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;