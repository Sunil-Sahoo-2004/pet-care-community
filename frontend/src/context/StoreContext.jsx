/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { pet_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    // eslint-disable-next-line no-unused-vars
    const url = "http://localhost:4000";

    const [cartItems, setCartItems]=useState({});

    const addToCart = (cardId) => {
        if (!cartItems[cardId]) {
            setCartItems((prev)=>({...prev,[cardId]:1}))
        } else {
            setCartItems((prev)=>({...prev,[cardId]:prev[cardId]+1}))
        }
    }

    const removeFromCart = (cardId) => {
        setCartItems((prev)=>({...prev, [cardId]:prev[cardId]-1}))
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        pet_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart 
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;