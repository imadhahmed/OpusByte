import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'David Vance',
    role: 'Principal Solutions Architect & Founder',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Head of AI & Intelligent Automation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'VP of Cloud Engineering & Infrastructure',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'
  }
];

export default function TeamSection() {
  return (
    <section className="team-two" id="team">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h4>Technology Leadership</h4>
          </div>
          <h2>The Engineering Minds at OpusByte</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} />
                <div className="team-social-overlay">
                  <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                  <a href="#" aria-label="GitHub"><Github size={16} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
                </div>
              </div>

              <div className="team-card-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
