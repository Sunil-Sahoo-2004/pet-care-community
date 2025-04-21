import React, { useContext } from 'react'
import './PetDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PetCard from '../PetCard/PetCard'

// eslint-disable-next-line no-unused-vars
const PetDisplay = ({category}) => {

    const {pet_list} = useContext(StoreContext)
  return (
    <div className='pet-display' id='pet-display'>
        <h2>Best Pets for you</h2>
        <div className="pet-display-list">
            {pet_list.map((item, index)=>{
                return <PetCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default PetDisplay
