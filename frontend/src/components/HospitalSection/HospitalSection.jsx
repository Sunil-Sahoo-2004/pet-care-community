import React from 'react'
import './HospitalSection.css'

const HospitalSection = () => {
  return (
    <div className="hospital-section">
      <div className="hospital-content">
        <h2>Find Pet Hospitals</h2>
        <p className="hospital-description">
          Get your pets the medical care they need. Explore nearby veterinary hospitals for regular checkups, emergencies, and specialized treatments.
        </p>

        <div className="hospital-grid">
          <div className="hospital-card">
            <img src="/images/hospital1.jpg" alt="Vet Hospital 1" />
            <h4>CareVet Animal Hospital</h4>
            <p>Delhi • 24/7 Emergency Services • Experienced Vets</p>
            <button className="hospital-btn">View Details</button>
          </div>

          <div className="hospital-card">
            <img src="/images/hospital2.jpg" alt="Vet Hospital 2" />
            <h4>Paws & Claws Clinic</h4>
            <p>Pune • Vaccination • Surgery • Dental Care</p>
            <button className="hospital-btn">View Details</button>
          </div>

          <div className="hospital-card">
            <img src="/images/hospital3.jpg" alt="Vet Hospital 3" />
            <h4>The Pet Wellness Center</h4>
            <p>Hyderabad • Advanced Diagnostic Lab • Grooming</p>
            <button className="hospital-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalSection
