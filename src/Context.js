import React, { useState } from "react"
import useAutoAuth from "./components/AutoAuth/useAutoAuth"
import useMessages from "./components/messages/useMessages"
import useRooms from "./components/messages/useRooms"
import useDbMessages from "./components/messages/useDbMessages"
import useOldDbMessages from "./components/messages/useOldDbMessages"

const Context = React.createContext()

function ContextProvider({ children }) {

    const { user, userSet } = useAutoAuth()
    const [pastedOrDroppedImg, pastedOrDroppedImgSet] = useState([])
    const [dialog, dialogSet] = useState({ show: false, title: "", children: "" })
    const [snackbar, snackbarSet] = useState({ show: false, text: "", link: "", linkText: "", linkType: "" })
    const [messageReplyingTo, messageReplyingToSet] = useState(null) // { img: "", name: "", msg: "" }
    const { messages, messagesSet } = useMessages(dialogSet) // add message
    const { rooms, roomsSet, totalNotReadNum } = useRooms(snackbarSet, user)
    const { dbMessages, dbMessagesSet } = useDbMessages(snackbarSet, user)
    const { oldDbMessages, oldDbMessagesSet, skipOldDbMessages, skipOldDbMessagesSet } = useOldDbMessages() // for skip: to load old messages on top of new messages (2 separate messages)

    // ! RETURN
    return (
        <Context.Provider value={{
            user, userSet,
            pastedOrDroppedImg, pastedOrDroppedImgSet,
            dialog, dialogSet,
            snackbar, snackbarSet,
            messageReplyingTo, messageReplyingToSet,
            messages, messagesSet,
            rooms, roomsSet, totalNotReadNum,
            dbMessages, dbMessagesSet,
            oldDbMessages, oldDbMessagesSet, skipOldDbMessages, skipOldDbMessagesSet
        }}>

            {children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }