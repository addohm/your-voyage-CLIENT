import React, { useState } from "react"
import useAutoAuth from "./components/AutoAuth/useAutoAuth"

const Context = React.createContext()

function ContextProvider({ children }) {

    const { user, userSet } = useAutoAuth()
    const [pastedOrDroppedImg, pastedOrDroppedImgSet] = useState([])
    const [dialog, dialogSet] = useState({ show: false, title: "", children: "" })
    const [snackbar, snackbarSet] = useState({ show: false, text: "", link: "", linkText: "", linkType: "" })

    // ! RETURN
    return (
        <Context.Provider value={{
            // user
            user, userSet,
            // pastedOrDroppedImg
            pastedOrDroppedImg, pastedOrDroppedImgSet,
            // dialog
            dialog, dialogSet,
            // snackbar
            snackbar, snackbarSet
        }}>

            {children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }