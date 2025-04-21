import React from 'react'
import './PetCard.css'
import { assets } from '../../assets/assets'

// eslint-disable-next-line no-unused-vars
const PetCard = ({id, name, price, description, image}) => {
  return (
    <div className='pet-card'>
        <div className="pet-cart-img-container">
            <img className='pet-card-image' src={image} alt="" />
        </div>
        <div className="pet-card-info">
            <div className="pet-card-name-rating">
                <p>{name}</p>
                <img src={assets.rating_stars} alt="This is the rating section for the pates" />
            </div>
            <p className="pet-card-desc">{description}</p>
            <p className='pet-card-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default PetCard
