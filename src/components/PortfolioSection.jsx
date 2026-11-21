import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Enterprise Core Modernization',
    category: 'Modernization',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'AI Customer Intelligence Engine',
    category: 'Cloud & AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Scalable Fintech Banking Core',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Global Supply Chain Mobile Suite',
    category: 'Mobile & Web',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Cloud-Native Telemetry & Analytics',
    category: 'Cloud & AI',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'High-Performance Desktop Engine',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'Custom Software', 'Cloud & AI', 'Mobile & Web', 'Modernization'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="project-two" id="portfolio">
      <div className="container">
        {/* Header with Title and Filter Tabs */}
        <div className="portfolio-header-flex">
          <div className="sec-title" style={{ marginBottom: 0 }}>
            <div className="sub-title">
              <h4>Case Studies</h4>
            </div>
            <h2>Impactful Digital Solutions in Action</h2>
          </div>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-img-box">
                <img src={p.image} alt={p.title} />
                <div className="project-card-overlay">
                  <div className="overlay-content">
                    <span className="category">{p.category}</span>
                    <h3>{p.title}</h3>
                  </div>
                </div>
              </div>

              <div className="project-card-body">
                <div>
                  <div className="cat">{p.category}</div>
                  <h3>{p.title}</h3>
                </div>
                <a href="#footer" className="project-action-btn" aria-label={`View ${p.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
