import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>Why Join Us?</h2>
        <p>
          Our Pet Care Community is more than just a network—it's a family. Whether you're a first-time pet owner or an experienced vet, we offer a space to share, learn, and grow together. Discover pet care tips, connect with professionals, and be part of something pawsome!
        </p>
        <div className="about-highlights">
          <div className="highlight">
            <h4>🐶 Expert Advice</h4>
            <p>Connect with certified vets and experienced pet owners.</p>
          </div>
          <div className="highlight">
            <h4>📅 Events & Reminders</h4>
            <p>Get updates on meetups, adoption drives, and pet care schedules.</p>
          </div>
          <div className="highlight">
            <h4>❤️ Community Support</h4>
            <p>Share stories, ask questions, and help others in the community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
