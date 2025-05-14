import React from 'react'
import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-content">
        <h2>Our Services</h2>
        <p className="services-intro">
          Everything you need to give your pets the best care — all in one place.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <span className="emoji">🐾</span>
            <h4>Explore & Buy Pets</h4>
            <p>Browse a variety of pets and bring home a new companion from trusted sources.</p>
          </div>

          <div className="service-card">
            <span className="emoji">🏡</span>
            <h4>Adopt Pets</h4>
            <p>Give loving homes to rescued animals and make a difference.</p>
          </div>

          <div className="service-card">
            <span className="emoji">🛏️</span>
            <h4>Book Pet Hostels</h4>
            <p>Safe and clean pet hostels for when you're away. Book stays easily online.</p>
          </div>

          <div className="service-card">
            <span className="emoji">🏥</span>
            <h4>Find Pet Hospitals</h4>
            <p>Locate nearby veterinary hospitals for emergency or regular checkups.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
