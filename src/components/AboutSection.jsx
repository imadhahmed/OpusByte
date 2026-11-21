import React from 'react';
import { 
  CheckCircle, 
  Award, 
  Cpu, 
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="about-three" id="about">
      {/* Decorative vectors */}
      <div 
        className="deco-shape float-bob-y" 
        style={{ top: '80px', left: '40px', opacity: 0.4 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="var(--thm-primary)" strokeWidth="3" />
        </svg>
      </div>

      <div className="container">
        <div className="about-three-grid">
          {/* Left Collage Column */}
          <div className="about-collage-wrapper">
            <div className="collage-col-left">
              <div className="collage-img-card" style={{ height: '260px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                  alt="Software Engineering Team Collaborating" 
                />
              </div>
              <div className="collage-img-card" style={{ height: '210px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Data Architecture and Real-Time Telemetry" 
                />
              </div>
            </div>

            <div className="collage-col-right">
              <div className="collage-img-card" style={{ height: '220px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" 
                  alt="Cloud Native Infrastructure Monitoring" 
                />
              </div>
              <div className="collage-img-card" style={{ height: '250px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" 
                  alt="AI Product Architecture Strategy" 
                />
              </div>
            </div>

            {/* Circular Experience Badge in Center */}
            <div className="about-exp-badge float-bob-x">
              <span className="years">100%</span>
              <span className="label">Future-Ready Focus</span>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="about-content">
            <div className="sec-title">
              <div className="sub-title">
                <h4>About OpusByte</h4>
              </div>
              <h2>A Catalyst for Innovation & Business Transformation</h2>
            </div>

            <p className="about-desc">
              At OpusByte, we believe technology is more than just code—it's a catalyst for innovation, business transformation, and sustainable growth. We partner with organizations to streamline operations, enhance customer experiences, and unlock new opportunities through modern technology.
            </p>

            <p className="about-desc" style={{ marginTop: '-15px', marginBottom: '30px' }}>
              Whether building new digital products or modernizing existing systems, we focus on creating scalable, secure, and future-ready solutions that align with our clients' strategic objectives.
            </p>

            {/* Stats Row */}
            <div className="about-stats-row">
              <div className="about-stat-box">
                <div className="about-stat-icon">
                  <Award size={24} />
                </div>
                <div className="about-stat-text">
                  <h3>Enterprise Solutions</h3>
                  <p>Delivered with 100% Precision</p>
                </div>
              </div>

              <div className="about-stat-box">
                <div className="about-stat-icon">
                  <Cpu size={24} />
                </div>
                <div className="about-stat-text">
                  <h3>Cloud & AI Focus</h3>
                  <p>Intelligent, Scalable Architectures</p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="about-feature-list">
              <div className="about-feature-item">
                <CheckCircle size={20} />
                <span>Full-Spectrum Expertise: Web, Mobile, Desktop, Cloud & AI</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle size={20} />
                <span>Legacy Modernization Without Disrupting Business Continuity</span>
              </div>
              <div className="about-feature-item">
                <ShieldCheck size={20} />
                <span>Enterprise-Grade Security, High Performance & SLA Guarantees</span>
              </div>
            </div>

            <a href="#services" className="thm-btn">
              Discover Our Services <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
