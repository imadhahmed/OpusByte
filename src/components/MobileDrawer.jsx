import React from 'react';
import { X, Phone, Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`mobile-drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <div className={`mobile-drawer-panel ${isOpen ? 'active' : ''}`}>
        <div>
          <div className="mobile-drawer-header">
            <a href="#" className="header-logo" style={{ color: '#fff' }}>
              <img src="/Logo.svg" alt="OpusByte Logo" className="header-logo-img" />
              <span>OpusByte</span>
            </a>
            <button 
              onClick={onClose}
              style={{ color: '#fff', fontSize: '24px' }}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav-list">
            <a href="#hero" onClick={onClose}>Home</a>
            <a href="#about" onClick={onClose}>About Us</a>
            <a href="#services" onClick={onClose}>Services & Solutions</a>
            <a href="#portfolio" onClick={onClose}>Case Studies</a>
            <a href="#process" onClick={onClose}>Methodology</a>
            <a href="#team" onClick={onClose}>Leadership</a>
            <a href="#testimonials" onClick={onClose}>Client Reviews</a>
            <a href="#blog" onClick={onClose}>Tech Insights</a>
            <a href="#footer" onClick={onClose}>Contact</a>
          </nav>
        </div>

        <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '14px', color: '#bbb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={15} color="var(--thm-secondary)" />
              <a href="tel:18005550198" style={{ color: '#fff' }}>+1 (800) 555-0198</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={15} color="var(--thm-secondary)" />
              <a href="mailto:contact@opusbyte.com" style={{ color: '#fff' }}>contact@opusbyte.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" style={{ color: '#fff', width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Linkedin size={16} />
            </a>
            <a href="#" style={{ color: '#fff', width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Github size={16} />
            </a>
            <a href="#" style={{ color: '#fff', width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Twitter size={16} />
            </a>
            <a href="#" style={{ color: '#fff', width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
