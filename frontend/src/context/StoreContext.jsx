/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { pet_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    // eslint-disable-next-line no-unused-vars
    const url = "http://localhost:4000";

    const contextValue = {
        pet_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;