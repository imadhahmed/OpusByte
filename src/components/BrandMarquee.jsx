import React, { useState } from 'react';
import { 
  Cloud, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Globe2, 
  Server, 
  Sparkles,
  Code2,
  Smartphone,
  Network,
  GitBranch,
  ShieldCheck,
  Zap,
  Box
} from 'lucide-react';

const row1Technologies = [
  { name: 'React & Next.js', category: 'Frontend Framework', icon: Globe2 },
  { name: 'TypeScript', category: 'Typed Core Language', icon: Code2 },
  { name: 'Python & FastAPI', category: 'Backend & AI Systems', icon: Terminal },
  { name: 'Node.js & Express', category: 'Server Architecture', icon: Server },
  { name: 'Flutter & React Native', category: 'Cross-Platform Mobile', icon: Smartphone },
  { name: 'PostgreSQL & MongoDB', category: 'Relational & NoSQL', icon: Database },
  { name: 'Swift & Kotlin', category: 'Native Mobile Engineering', icon: Smartphone },
  { name: 'Go & Microservices', category: 'High-Concurrency Systems', icon: Layers },
];

const row2Technologies = [
  { name: 'Amazon Web Services (AWS)', category: 'Cloud Infrastructure', icon: Cloud },
  { name: 'Microsoft Azure', category: 'Enterprise Cloud', icon: Layers },
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud & AI Platform', icon: Globe2 },
  { name: 'Kubernetes & Docker', category: 'Container Orchestration', icon: Box },
  { name: 'Artificial Intelligence & OpenAI', category: 'Intelligent Automation', icon: Sparkles },
  { name: 'PyTorch & TensorFlow', category: 'Machine Learning Models', icon: Cpu },
  { name: 'Terraform & CI/CD Pipelines', category: 'Infrastructure as Code', icon: GitBranch },
  { name: 'Redis & Apache Kafka', category: 'Caching & Event Streaming', icon: Network },
];

const domainHighlights = [
  { label: 'Cloud Transformation', desc: 'AWS, Azure, GCP & Kubernetes' },
  { label: 'AI & Machine Learning', desc: 'OpenAI, PyTorch, TensorFlow & LLMs' },
  { label: 'Modern Web & Mobile', desc: 'React, Next.js, TypeScript & Flutter' },
  { label: 'Enterprise Systems', desc: 'PostgreSQL, Microservices & Docker' },
];

export default function BrandMarquee() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        {/* Section Title */}
        <div className="sec-title text-center" style={{ marginBottom: '35px' }}>
          <div className="sub-title">
            <h4>Technologies We Use</h4>
          </div>
          <h2>Our Technology Stack & Ecosystem</h2>
          <p style={{ maxWidth: '680px', margin: '14px auto 0', color: 'var(--thm-body-font-color)', fontSize: '16px' }}>
            We leverage industry-leading cloud platforms, modern frameworks, and artificial intelligence to engineer secure, scalable, and future-ready enterprise solutions.
          </p>
        </div>

        {/* Domain Highlights Cards */}
        <div className="tech-highlights-grid">
          {domainHighlights.map((dh, idx) => (
            <div key={idx} className="tech-highlight-pill">
              <span className="dot" />
              <div>
                <strong>{dh.label}</strong>
                <p>{dh.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Animated Infinite Marquee Rows (Zero text wrap, zero overlapping) */}
      <div className="tech-marquee-wrapper">
        {/* Row 1: Leftward Marquee */}
        <div className="tech-marquee-row">
          <div className="tech-marquee-track">
            {row1Technologies.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={`r1-a-${i}`} className="tech-card-item">
                  <div className="tech-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{t.name}</span>
                    <span className="tech-category">{t.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Duplicate track for seamless infinite scroll */}
          <div className="tech-marquee-track" aria-hidden="true">
            {row1Technologies.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={`r1-b-${i}`} className="tech-card-item">
                  <div className="tech-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{t.name}</span>
                    <span className="tech-category">{t.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Rightward (Reverse) Marquee */}
        <div className="tech-marquee-row">
          <div className="tech-marquee-track reverse">
            {row2Technologies.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={`r2-a-${i}`} className="tech-card-item">
                  <div className="tech-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{t.name}</span>
                    <span className="tech-category">{t.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Duplicate track for seamless infinite scroll */}
          <div className="tech-marquee-track reverse" aria-hidden="true">
            {row2Technologies.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={`r2-b-${i}`} className="tech-card-item">
                  <div className="tech-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{t.name}</span>
                    <span className="tech-category">{t.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
