import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Contact />
      </main>
    </div>
  );
};

export default App;