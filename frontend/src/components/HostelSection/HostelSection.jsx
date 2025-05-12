import React from 'react'
import './HostelSection.css'

const HostelSection = () => {
  return (
    <div className="hostel-section">
      <div className="hostel-content">
        <h2>Book Pet Hostels</h2>
        <p className="hostel-description">
          Need a safe place for your pet while you're away? Explore our trusted pet hostels with loving care, 24/7 supervision, and cozy spaces.
        </p>

        <div className="hostel-grid">
          <div className="hostel-card">
            <img src="/images/hostel1.jpg" alt="Pet hostel 1" />
            <h4>Happy Tails Inn</h4>
            <p>Kolkata • A cozy stay for cats and dogs • ₹800/day</p>
            <button className="hostel-btn">Book Now</button>
          </div>

          <div className="hostel-card">
            <img src="/images/hostel2.jpg" alt="Pet hostel 2" />
            <h4>Paw Palace</h4>
            <p>Mumbai • Spacious, clean, and secure • ₹950/day</p>
            <button className="hostel-btn">Book Now</button>
          </div>

          <div className="hostel-card">
            <img src="/images/hostel3.jpg" alt="Pet hostel 3" />
            <h4>The Fur Resort</h4>
            <p>Bangalore • Luxury suites for your furry friends • ₹1200/day</p>
            <button className="hostel-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostelSection
