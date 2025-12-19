import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import VideoShowcase from './components/VideoShowcase';
import PhotoGallery from './components/PhotoGallery';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-cream min-h-screen selection:bg-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <PhotoGallery />
        <VideoShowcase />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
