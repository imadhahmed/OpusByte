import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Youtube 
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="footer-three" id="footer">
      <div className="container">
        {/* Top Consultation / Quote Bar */}
        <div className="footer-quote-box">
          <div className="quote-box-text">
            <h2>Transform Ideas Into Impactful Solutions</h2>
            <p>Connect with our solutions architects to discuss your technology initiatives.</p>
          </div>

          <form onSubmit={handleSubmit} className="quote-form-flex">
            <input 
              type="email" 
              placeholder="Enter your business email..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="quote-input"
            />
            <button type="submit" className="thm-btn thm-btn--dark">
              {submitted ? 'Inquiry Sent!' : 'Get A Proposal'} <ArrowUpRight size={17} />
            </button>
          </form>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="footer-main-grid">
          {/* Col 1: Brand & Mission */}
          <div className="footer-widget">
            <a href="#" className="header-logo" style={{ marginBottom: '20px' }}>
              <img src="/Logo.svg" alt="OpusByte Logo" className="header-logo-img" />
              <span>OpusByte</span>
            </a>
            <p className="footer-about-text">
              OpusByte is a technology solutions company dedicated to helping businesses transform ideas into impactful digital products and intelligent business solutions. Driven by innovation and guided by quality.
            </p>
            <div className="footer-social-links">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="footer-widget">
            <h3 className="widget-title">Core Services</h3>
            <ul className="footer-links-list">
              <li><a href="#services">Custom Software Development</a></li>
              <li><a href="#services">Web Application Development</a></li>
              <li><a href="#services">Mobile Application Development</a></li>
              <li><a href="#services">Desktop Software Solutions</a></li>
              <li><a href="#services">AI Integration & Automation</a></li>
            </ul>
          </div>

          {/* Col 3: Cloud & Modernization */}
          <div className="footer-widget">
            <h3 className="widget-title">Cloud & Systems</h3>
            <ul className="footer-links-list">
              <li><a href="#services">Cloud Migration & Cloud-Native</a></li>
              <li><a href="#services">Legacy System Modernization</a></li>
              <li><a href="#services">API & System Integration</a></li>
              <li><a href="#services">Maintenance & Support</a></li>
              <li><a href="#portfolio">Case Studies & Deliverables</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-widget">
            <h3 className="widget-title">Contact OpusByte</h3>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={18} />
                <span>100 Innovation Way, Suite 400, Technology Corridor, NY 10001</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:18005550198">+1 (800) 555-0198</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:contact@opusbyte.com">contact@opusbyte.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>
            Copyright © 2026 <strong>OpusByte</strong>. Driven by innovation, guided by quality. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
