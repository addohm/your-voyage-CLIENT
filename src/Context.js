import React, { useEffect, useState } from "react"
import useAutoAuth from "./components/AutoAuth/useAutoAuth"
import useMessages from "./components/messages/useMessages"
import useRooms from "./components/messages/useRooms"
import useDbMessages from "./components/messages/useDbMessages"
import useOldDbMessages from "./components/messages/useOldDbMessages"
import useLang from "./components/user/useLang"
import useTheme from "./components/user/useTheme"
import useApplierForm from "./components/coachCard/useApplierForm"

const Context = React.createContext()

function ContextProvider({ children }) {

    const { user, userSet } = useAutoAuth()
    const [pastedOrDroppedImg, pastedOrDroppedImgSet] = useState([])
    const [dialog, dialogSet] = useState({ show: false, title: "", children: "", onClose: "" })
    const [snackbar, snackbarSet] = useState({ show: false, text: "", link: "", linkText: "", linkType: "" })
    const [messageReplyingTo, messageReplyingToSet] = useState(null) // { img: "", name: "", msg: "" }
    const { messages, messagesSet } = useMessages(dialogSet) // add message
    const [rooms, totalNotReadNum, isLoadingCourses] = useRooms({ snackbarSet, user, path: "/getRooms" })
    const [roomsSupport, totalNotReadNumSupport, isLoadingSupport] = useRooms({ snackbarSet, user, path: "/getRoomsSupport" })
    const { dbMessages, dbMessagesSet } = useDbMessages()
    const { oldDbMessages, oldDbMessagesSet, skipOldDbMessages, skipOldDbMessagesSet } = useOldDbMessages() // for skip: to load old messages on top of new messages (2 separate messages)
    const { lang, langSet } = useLang()
    const { theme, themeSet } = useTheme()
    const [isVisibleMobileNav, isVisibleMobileNavSet] = useState(false)
    const { applierForm, applierFormSet } = useApplierForm()

    // ! RETURN
    return (
        <Context.Provider value={{
            user, userSet,
            pastedOrDroppedImg, pastedOrDroppedImgSet,
            dialog, dialogSet,
            snackbar, snackbarSet,
            messageReplyingTo, messageReplyingToSet,
            messages, messagesSet,
            rooms, totalNotReadNum, isLoadingCourses,
            roomsSupport, totalNotReadNumSupport, isLoadingSupport,
            dbMessages, dbMessagesSet,
            oldDbMessages, oldDbMessagesSet, skipOldDbMessages, skipOldDbMessagesSet,
            lang, langSet,
            theme, themeSet,
            isVisibleMobileNav, isVisibleMobileNavSet,
            applierForm, applierFormSet
        }}>

            {children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }