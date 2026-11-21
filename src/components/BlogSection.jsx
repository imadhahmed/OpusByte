import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Accelerating Enterprise Innovation with AI Integration & Intelligent Automation',
    date: 'Nov 12, 2026',
    readTime: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'De-Risking Legacy System Modernization: A Pragmatic Migration Guide',
    date: 'Nov 04, 2026',
    readTime: '8 Min Read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Architecting Cloud-Native Microservices for Extreme Scale & Resilience',
    date: 'Oct 28, 2026',
    readTime: '5 Min Read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogSection() {
  return (
    <section className="blog-three" id="blog">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h4>Tech Insights</h4>
          </div>
          <h2>Latest Engineering & Cloud Perspectives</h2>
        </div>

        <div className="blog-grid">
          {blogs.map((b) => (
            <article key={b.id} className="blog-card">
              <div className="blog-img-box">
                <img src={b.image} alt={b.title} />
              </div>

              <div className="blog-card-content">
                <div className="blog-meta-box">
                  <div className="blog-meta-item">
                    <Calendar size={14} />
                    <span>{b.date}</span>
                  </div>
                  <div className="blog-meta-item">
                    <Clock size={14} />
                    <span>{b.readTime}</span>
                  </div>
                </div>

                <h3>
                  <a href="#blog">{b.title}</a>
                </h3>

                <a href="#blog" className="blog-read-more-link">
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
