import React, { useState } from "react"
import useAutoAuth from "./components/AutoAuth/useAutoAuth"

const Context = React.createContext()

function ContextProvider({ children }) {

    const { user, userSet } = useAutoAuth()

    // ! RETURN
    return (
        <Context.Provider value={{
            // user
            user, userSet
        }}>

            {children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }