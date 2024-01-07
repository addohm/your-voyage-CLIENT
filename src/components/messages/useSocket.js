import io from "socket.io-client"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import Room from "./Room"
import { SERVER_URL } from "../../utils/consts"
import axios from "../../utils/axios"

export default function useSocket(room, dbMessagesSet) {

    const { user, snackbarSet } = useContext(Context)
    const showSnackbar = (data) => snackbarSet({ show: true, text: <Room {...data} /> })

    // ! socket send
    const [message, messageSet] = useState("") // input value
    const socket = io.connect(SERVER_URL)

    function sendMessage() {
        if (!message) return
        socket.emit("send_message", { msg: message, room, email: user.email, name: user.name, img: user.img })
    }

    useEffect(() => {
        socket.emit("join_room", { room, userEmail: user?.email }) // join room 1 time
    }, [])
    // ? socket send

    // ! socket receive
    useEffect(() => {
        socket.on("receive_message", (data) => {
            const isReceivedMsgMyMsg = user?.email === data.email
            if (!isReceivedMsgMyMsg) { // if I received NOT MINE message (msg TO ME)
                showSnackbar(data) // show snackbar
                // ! there are 2 markAllMessagesAsRead: 1: enter the room (from outside the room) 2: received message (being inside the room)
                axios("/markAllMessagesAsRead", { room, userEmail: user?.email })
            }
            dbMessagesSet(prev => [...prev, data])
        })
    }, [socket])
    // ? socket receive

    // ! update socket message
    useEffect(() => {
        socket.on("edit_message", (data) => {
            showSnackbar(data)
            dbMessagesSet(prev => {
                const updatedMessages = prev.map(message => {
                    if (message._id === data._id) {
                        message.msg = data.msg
                        message.isUpdated = data.isUpdated
                        message.isRestored = data.isRestored
                        message.updatedAt = Date.now()
                    }
                    return message
                })
                return updatedMessages
            })
        })
    }, [socket])
    // ? update socket message

    // ! delete socket message
    useEffect(() => {
        socket.on("delete_message", (data) => {
            dbMessagesSet(prev => {
                const updatedMessages = prev.map(message => {
                    if (message._id === data._id) {
                        message.isDeleted = data.isDeleted
                        message.isRestored = data.isRestored
                        message.updatedAt = Date.now()
                    }
                    return message
                })
                return updatedMessages
            })
        })
    }, [socket])
    // ? delete socket message

    return { message, messageSet, sendMessage }
}
