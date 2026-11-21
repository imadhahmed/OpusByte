import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  ChevronDown, 
  ArrowUpRight 
} from 'lucide-react';

export default function Header({ onOpenSearch, onOpenMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-header">
      {/* Top Bar Announcement & Contact */}
      <div className="main-header-top">
        <div className="container">
          <div className="main-header-top-inner">
            <div className="top-left-announcement">
              <span className="badge-icon"><Sparkles size={15} color="var(--thm-secondary)" /></span>
              <span>OpusByte: Transforming Ideas Into Impactful Digital Products & Intelligent Solutions</span>
            </div>
            <ul className="top-right-contacts">
              <li>
                <Phone size={14} color="var(--thm-secondary)" />
                <a href="tel:18005550198">+1 (800) 555-0198</a>
              </li>
              <li>
                <Mail size={14} color="var(--thm-secondary)" />
                <a href="mailto:contact@opusbyte.com">contact@opusbyte.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`main-header-bottom ${isSticky ? 'is-sticky' : ''}`}>
        <div className="container">
          <div className="main-header-bottom-inner">
            {/* Logo */}
            <a href="#" className="header-logo">
              <img src="/Logo.svg" alt="OpusByte Logo" className="header-logo-img" />
              <span>OpusByte</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="main-nav-menu">
              <div className="nav-item active">
                <a href="#">Home <ChevronDown size={14} /></a>
                <ul className="nav-dropdown">
                  <li><a href="#hero">Technology Solutions</a></li>
                  <li><a href="#about">About OpusByte</a></li>
                  <li><a href="#process">Our Methodology</a></li>
                </ul>
              </div>

              <div className="nav-item">
                <a href="#about">About</a>
              </div>

              <div className="nav-item">
                <a href="#services">Services <ChevronDown size={14} /></a>
                <ul className="nav-dropdown">
                  <li><a href="#services">Custom Software Development</a></li>
                  <li><a href="#services">Web & Mobile Applications</a></li>
                  <li><a href="#services">AI & Intelligent Automation</a></li>
                  <li><a href="#services">Cloud Transformation</a></li>
                  <li><a href="#services">Legacy Modernization</a></li>
                  <li><a href="#services">API & System Integration</a></li>
                </ul>
              </div>

              <div className="nav-item">
                <a href="#portfolio">Case Studies <ChevronDown size={14} /></a>
                <ul className="nav-dropdown">
                  <li><a href="#portfolio">AI & Automation</a></li>
                  <li><a href="#portfolio">Cloud-Native Platforms</a></li>
                  <li><a href="#portfolio">Enterprise Modernization</a></li>
                </ul>
              </div>

              <div className="nav-item">
                <a href="#blog">Insights</a>
              </div>

              <div className="nav-item">
                <a href="#footer">Contact</a>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="header-right-actions">
              <button 
                className="search-toggler-btn" 
                onClick={onOpenSearch}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <a href="#footer" className="thm-btn header-cta-btn">
                Get In Touch <ArrowUpRight size={16} />
              </a>

              <button 
                className="mobile-nav-toggler"
                onClick={onOpenMobileMenu}
                aria-label="Toggle Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
