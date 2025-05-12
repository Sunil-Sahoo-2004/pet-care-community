import React from 'react'
import './AdoptSection.css'

const AdoptSection = () => {
  return (
    <div className="adopt-section">
      <div className="adopt-content">
        <h2>Adopt a Pet</h2>
        <p className="adopt-description">
          Looking to add a furry friend to your family? Browse our list of adorable rescue pets waiting for a forever home.
        </p>

        <div className="adopt-grid">
          <div className="adopt-card">
            <img src="/images/dog1.jpg" alt="Dog for adoption" />
            <h4>Rocky</h4>
            <p>2-year-old Labrador • Energetic & Loyal</p>
            <button className="adopt-btn">Adopt</button>
          </div>

          <div className="adopt-card">
            <img src="/images/cat1.jpg" alt="Cat for adoption" />
            <h4>Luna</h4>
            <p>1-year-old Persian • Calm & Friendly</p>
            <button className="adopt-btn">Adopt</button>
          </div>

          <div className="adopt-card">
            <img src="/images/dog2.jpg" alt="Dog for adoption" />
            <h4>Bella</h4>
            <p>3-year-old Beagle • Playful & Smart</p>
            <button className="adopt-btn">Adopt</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdoptSection
