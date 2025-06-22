import { createContext } from "react";

const StoreContext = createContext(false)

export const StoreContextProvider = (props) => {
    const contextValue = {

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext