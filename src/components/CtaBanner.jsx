import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="cta-three">
      <div className="cta-three-bg-overlay" />
      <div className="container">
        <div className="cta-three-inner">
          <div className="cta-content">
            <span className="sub">Driven by Innovation & Guided by Quality</span>
            <h2>Ready to Transform Your Ideas Into<br />Impactful Digital Products?</h2>
          </div>

          <a href="#footer" className="thm-btn">
            Schedule A Consultation <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
