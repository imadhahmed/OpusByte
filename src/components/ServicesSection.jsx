import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Monitor, 
  Bot, 
  Cloud, 
  RefreshCw, 
  Network, 
  LifeBuoy, 
  ArrowRight 
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    num: "01",
    title: "Custom Software Development",
    desc: "Bespoke enterprise applications and robust architectures engineered to solve complex operational challenges and align with strategic goals.",
    icon: Code2
  },
  {
    id: 2,
    num: "02",
    title: "Web Application Development",
    desc: "High-performance, secure, and modern web platforms built with reactive frameworks, optimized for rapid rendering and fluid user experiences.",
    icon: Globe
  },
  {
    id: 3,
    num: "03",
    title: "Mobile Application Development",
    desc: "Intuitive native and cross-platform iOS and Android applications crafted for high engagement, offline capabilities, and seamless sync.",
    icon: Smartphone
  },
  {
    id: 4,
    num: "04",
    title: "Desktop Software Solutions",
    desc: "Engineered desktop systems for Windows, macOS, and Linux that demand intensive data processing, hardware integration, and enterprise reliability.",
    icon: Monitor
  },
  {
    id: 5,
    num: "05",
    title: "AI Integration & Automation",
    desc: "Harnessing machine learning, predictive intelligence, and intelligent automation to eliminate repetitive workflows and unlock actionable insights.",
    icon: Bot
  },
  {
    id: 6,
    num: "06",
    title: "Cloud Migration & Cloud-Native",
    desc: "Modernizing IT estates through seamless migration to AWS, Azure, and GCP, architecting microservices with resilient containerization.",
    icon: Cloud
  },
  {
    id: 7,
    num: "07",
    title: "Legacy System Modernization",
    desc: "Transforming monolithic and outdated legacy systems into agile, maintainable, and cloud-ready architectures without disrupting active operations.",
    icon: RefreshCw
  },
  {
    id: 8,
    num: "08",
    title: "API Development & Integration",
    desc: "Designing secure, standards-compliant RESTful & GraphQL APIs that unify disparate software systems and foster seamless interoperability.",
    icon: Network
  },
  {
    id: 9,
    num: "09",
    title: "Maintenance & Technical Support",
    desc: "Continuous proactive monitoring, security patch management, performance tuning, and 24/7 technical support for mission-critical software.",
    icon: LifeBuoy
  }
];

export default function ServicesSection() {
  return (
    <section className="service-three" id="services">
      {/* Decorative vectors */}
      <div 
        className="deco-shape float-bob-x" 
        style={{ top: '100px', left: '80px', opacity: 0.15 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="var(--thm-secondary)" strokeWidth="3" strokeDasharray="8 8" />
        </svg>
      </div>

      <div 
        className="deco-shape float-bob-y" 
        style={{ bottom: '80px', right: '100px', opacity: 0.2 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,5 55,55 5,55" stroke="var(--thm-primary)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="sec-title text-center dark">
          <div className="sub-title">
            <h4>Our Services</h4>
          </div>
          <h2>Comprehensive Technology Solutions</h2>
        </div>

        {/* Services 3x3 Grid */}
        <div className="services-grid">
          {servicesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-card-icon">
                    <IconComponent size={28} />
                  </div>
                  <span className="service-card-index">{item.num}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a href="#footer" className="service-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
