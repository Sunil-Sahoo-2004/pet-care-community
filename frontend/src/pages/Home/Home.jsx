import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import PetDisplay from '../../components/PetDisplay/PetDisplay'
import AboutSection from '../../components/AboutSection/About'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import AdoptSection from '../../components/AdoptSection/AdoptSection'
import HostelSection from '../../components/HostelSection/HostelSection'
import HospitalSection from '../../components/HospitalSection/HospitalSection'


const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <AboutSection />
      <ServicesSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <PetDisplay category={category} />
      
    </div>
  )
}

export default Home
