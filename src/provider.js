import React, { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {

    const [teste,setTeste] = useState(0)
    return(
        <StatesContext.Provider value={{teste,setTeste}}
        >
            {children}
        </StatesContext.Provider>
    )
}

export const useStates = () => useContext(StatesContext)