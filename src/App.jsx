import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import ServiceJourney from './components/ServiceJourney';
import MenuShowcase from './components/MenuShowcase';
import MenuAnatomy from './components/MenuAnatomy';
import DeliveryPlatforms from './components/DeliveryPlatforms';
import WorkShowcase from './components/WorkShowcase';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CapabilityStrip from './components/CapabilityStrip';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* Short initial brand loader */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Sticky Header with onOpenAbout and onOpenContact callbacks */}
      <Header 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      {/* Main Content Flow - About and Contact are accessible via dedicated modals */}
      <main>
        {/* 1. Hero Section & 3D Ecosystem */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. Trust / Intro Strip */}
        <TrustStrip />

        {/* 3. What We Do (8 Interactive 3D Service Cards) */}
        <Services onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. 8-Stage 3D Scroll Storytelling Journey */}
        <ServiceJourney onOpenContact={() => setIsContactOpen(true)} />

        {/* 5. Exploded 5-Pillar Dish Anatomy */}
        <MenuAnatomy />

        {/* 6. Interactive Digital Menu Showcase & Add-on Calculator */}
        <MenuShowcase onOpenContact={() => setIsContactOpen(true)} />

        {/* 7. Zomato & Swiggy Marketplace Synchronization */}
        <DeliveryPlatforms onOpenContact={() => setIsContactOpen(true)} />

        {/* 8. Portfolio Showcase with Filter Tabs */}
        <WorkShowcase onOpenContact={() => setIsContactOpen(true)} />

        {/* 9. Interactive Draggable Before & After Comparison */}
        <BeforeAfter onOpenContact={() => setIsContactOpen(true)} />

        {/* 10. 5-Step Process Timeline */}
        <Process onOpenContact={() => setIsContactOpen(true)} />

        {/* 11. Why Restaurants Choose Us (6 Premium Cards) */}
        <WhyChooseUs onOpenContact={() => setIsContactOpen(true)} />

        {/* 12. Built Around Restaurant Needs Capability Strip */}
        <CapabilityStrip />
      </main>

      {/* Dedicated Colorful About Agency Modal */}
      <About 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        onOpenContact={() => {
          setIsAboutOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* Dedicated Colorful Contact & Consultation Modal */}
      <Contact 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Floating Quick-Action Contact Drawer */}
      <FloatingContact onOpenContact={() => setIsContactOpen(true)} />

      {/* Footer with onOpenAbout and onOpenContact callbacks */}
      <Footer 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
      />
    </div>
  );
}

export default App;