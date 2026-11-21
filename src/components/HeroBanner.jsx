import React from 'react';
import { ArrowUpRight, Play, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

export default function HeroBanner({ onOpenVideo }) {
  return (
    <section className="banner-three" id="hero">
      {/* Background Decorative Shapes */}
      <div 
        className="deco-shape float-bob-x" 
        style={{ top: '15%', left: '4%', opacity: 0.7 }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <circle cx="22.5" cy="22.5" r="22.5" fill="var(--thm-secondary)" fillOpacity="0.4" />
        </svg>
      </div>

      <div 
        className="deco-shape float-bob-y" 
        style={{ top: '65%', left: '8%', opacity: 0.6 }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect width="36" height="36" rx="8" fill="var(--thm-primary)" fillOpacity="0.3" transform="rotate(25 18 18)" />
        </svg>
      </div>

      <div 
        className="deco-shape rotate-me" 
        style={{ top: '20%', right: '6%', opacity: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L39 21L60 30L39 39L30 60L21 39L0 30L21 21L30 0Z" fill="var(--thm-secondary)" fillOpacity="0.6"/>
        </svg>
      </div>

      <div className="container">
        <div className="banner-three-grid">
          {/* Left Content Column */}
          <div className="banner-content">
            <div className="hero-badge">
              <Cpu size={16} color="var(--thm-primary)" />
              <span>Technology Solutions & AI Innovation</span>
            </div>

            <h1>Transform Ideas Into<br />Impactful Digital Products</h1>

            <p className="hero-desc">
              We combine software engineering excellence, cloud technologies, and artificial intelligence to deliver innovative solutions that drive growth, efficiency, and long-term success.
            </p>

            <div className="banner-btn-group">
              <a href="#services" className="thm-btn">
                Explore Services <ArrowUpRight size={17} />
              </a>

              <div className="video-trigger-btn" onClick={onOpenVideo}>
                <div className="play-pulse-circle">
                  <Play size={20} fill="#fff" />
                </div>
                <div className="video-btn-text">
                  <span className="label">Watch Company</span>
                  <span className="title">Overview Video</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Composition Column */}
          <div className="banner-images-wrapper">
            {/* Floating Metric Card */}
            <div className="hero-floating-stat float-bob-y">
              <div className="stat-icon-box">
                <CheckCircle2 size={24} />
              </div>
              <div className="stat-text">
                <h4>99.9%</h4>
                <p>Enterprise Scalability & SLA</p>
              </div>
            </div>

            {/* Main Technology Solutions Visual */}
            <div className="hero-main-card">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" 
                alt="OpusByte Software Engineers Designing Scalable Systems" 
              />
            </div>

            {/* Secondary Accent Card */}
            <div className="hero-secondary-card float-bob-x">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
                alt="Intelligent Cloud & AI Integration" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
