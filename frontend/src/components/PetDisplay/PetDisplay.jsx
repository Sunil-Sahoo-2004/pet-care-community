import React, { useContext, useState } from 'react'
import './PetDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PetCard from '../PetCard/PetCard'

const PetDisplay = ({ category }) => {
  const { pet_list } = useContext(StoreContext)
  const [showAll, setShowAll] = useState(false)

  const filteredPets = pet_list.filter(item =>
    category === 'All' || category === item.category
  )

  const petsToDisplay = showAll ? filteredPets : filteredPets.slice(0, 8)

  return (
    <div className='pet-display' id='pet-display'>
      <h2>Best Pets for you</h2>
      <div className="pet-display-list">
        {petsToDisplay.map((item, index) => {
          return (
            <PetCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          )
        })}
      </div>

      {!showAll && filteredPets.length > 8 && (
        <div className="view-all-container">
          <button className="view-all-button" onClick={() => setShowAll(true)}>
            View All
          </button>
        </div>
      )}
    </div>
  )
}

export default PetDisplay
