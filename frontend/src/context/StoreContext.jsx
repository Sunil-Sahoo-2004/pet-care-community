/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { pet_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = pet_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }    
        }
        return totalAmount;
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue = {
        pet_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;