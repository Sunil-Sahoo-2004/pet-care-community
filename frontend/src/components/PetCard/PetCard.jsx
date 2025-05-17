import React, { useContext } from 'react'
import './PetCard.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const PetCard = ({id, name, price, description, image}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  
  return (
    <div className='pet-card'>
        <div className="pet-cart-img-container">
            <img className='pet-card-image' src={image} alt="pet_image" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='add_icon' />
              :<div className='card-item-counter'>
                <img className='out' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon" />
                <p>{cartItems[id]}</p>
                <img className='in' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add_icon" />
               </div>
            }
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
