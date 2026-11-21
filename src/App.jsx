import React, { useState } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import SearchModal from './components/SearchModal';
import VideoModal from './components/VideoModal';
import HeroBanner from './components/HeroBanner';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BrandMarquee from './components/BrandMarquee';
import PortfolioSection from './components/PortfolioSection';
import CtaBanner from './components/CtaBanner';
import TeamSection from './components/TeamSection';
import WorkingProcessSection from './components/WorkingProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Header Navigation */}
      <Header 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Hero / Banner Three */}
      <main>
        <HeroBanner onOpenVideo={() => setVideoModalOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <BrandMarquee />
        <PortfolioSection />
        <CtaBanner />
        <TeamSection />
        <WorkingProcessSection />
        <TestimonialsSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
      <MobileDrawer 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
      <BackToTop />
    </div>
  );
}

