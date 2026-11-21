import React from 'react';

const steps = [
  {
    num: '01',
    label: 'Strategic Alignment',
    title: 'Discovery & Architecture Blueprint',
    desc: 'We analyze your strategic objectives, assess existing legacy infrastructure, and architect a future-ready technical roadmap tailored for rapid scale.'
  },
  {
    num: '02',
    label: 'Modern Engineering',
    title: 'Agile Build, Cloud & AI Integration',
    desc: 'High-velocity iterative sprints combining software engineering best practices, cloud-native deployments, and intelligent AI automation.'
  },
  {
    num: '03',
    label: 'Delivery & Scale',
    title: 'Verification, Launch & Proactive Support',
    desc: 'Rigorous automated QA, security compliance validation, zero-downtime release, and continuous 24/7 technical monitoring and maintenance.'
  }
];

export default function WorkingProcessSection() {
  return (
    <section className="working-process-one" id="process">
      <div className="container">
        <div className="sec-title text-center dark">
          <div className="sub-title">
            <h4>Our Methodology</h4>
          </div>
          <h2>How OpusByte Delivers Measurable Impact</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-card">
              <div className="process-step-indicator">
                <span>{step.num}</span>
              </div>
              <span style={{ color: 'var(--thm-secondary)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                {step.label}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
