import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "“OpusByte helped us re-architect our legacy system into a scalable cloud-native microservices architecture. Our application latency dropped by 65%, and our engineering velocity tripled within six months. Their commitment to architectural excellence is second to none.”",
    author: "Jonathan Price",
    role: "Chief Technology Officer, Apex Logistics",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 2,
    quote: "“The AI integration and automation designed by OpusByte transformed our core data pipelines. We automated 80% of our manual operational workflows with near-zero error rates. They understand how to build systems that produce real, measurable business value.”",
    author: "Alicia Gomez",
    role: "VP of Technology, FinEdge Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    quote: "“From custom web applications to cross-platform mobile tools, OpusByte delivered our enterprise product on schedule and with rock-solid security. They are true strategic partners who care deeply about business impact.”",
    author: "Robert Chen",
    role: "Founder & CEO, CloudPulse Platforms",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-three" id="testimonials">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h4>Client Testimonials</h4>
          </div>
          <h2>Trusted by Fast-Growing Businesses<br />& Enterprise Leaders</h2>
        </div>

        <div className="testimonial-box">
          <Quote className="quote-mark-icon" size={64} />

          <div className="testimonial-rating">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>

          <p className="testimonial-quote-text">
            {current.quote}
          </p>

          <div className="testimonial-author-flex">
            <div className="author-profile">
              <div className="author-avatar">
                <img src={current.avatar} alt={current.author} />
              </div>
              <div className="author-meta">
                <h3>{current.author}</h3>
                <p>{current.role}</p>
              </div>
            </div>

            <div className="testimonial-controls">
              <button 
                onClick={handlePrev} 
                className="slider-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext} 
                className="slider-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
