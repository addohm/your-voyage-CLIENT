import React, { useState } from "react"
import useAutoAuth from "./components/AutoAuth/useAutoAuth"
import useMessages from "./components/messages/useMessages"
import useRooms from "./components/messages/useRooms"

const Context = React.createContext()

function ContextProvider({ children }) {

    const { user, userSet } = useAutoAuth()
    const [pastedOrDroppedImg, pastedOrDroppedImgSet] = useState([])
    const [dialog, dialogSet] = useState({ show: false, title: "", children: "" })
    const [snackbar, snackbarSet] = useState({ show: false, text: "", link: "", linkText: "", linkType: "" })
    const [messageReplyingTo, messageReplyingToSet] = useState(null) // { img: "", name: "", msg: "" }
    const { messages, messagesSet } = useMessages(dialogSet)
    const { rooms, roomsSet, totalNotReadNum } = useRooms()

    // ! RETURN
    return (
        <Context.Provider value={{
            user, userSet,
            pastedOrDroppedImg, pastedOrDroppedImgSet,
            dialog, dialogSet,
            snackbar, snackbarSet,
            messageReplyingTo, messageReplyingToSet,
            messages, messagesSet,
            rooms, roomsSet, totalNotReadNum
        }}>

            {children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }