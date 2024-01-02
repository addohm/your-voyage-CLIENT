import io from "socket.io-client"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"

export default function useSocket(room, dbMessagesSet) {

    const { user } = useContext(Context)

    // ! socket send
    const [message, messageSet] = useState("") // input value
    const socket = io.connect("http://localhost:5001") // TODO !!!

    function sendMessage() {
        socket.emit("send_message", { msg: message, room, email: user.email })
    }

    useEffect(() => {
        socket.emit("join_room", room) // join room 1 time
    }, [])
    // ? socket send

    // ! socket receive
    useEffect(() => {
        socket.on("receive_message", (data) => {
            dbMessagesSet(prev => [...prev, data])
        })
    }, [socket])
    // ? socket receive

    // ! update socket message
    useEffect(() => {
        socket.on("edit_message", (data) => {
            dbMessagesSet(prev => {
                const updatedMessages = prev.map(message => {
                    if (message._id === data._id) {
                        message.msg = data.msg
                        message.isUpdated = data.isUpdated
                        message.isRestored = data.isRestored
                        message.updatedAt = data.updatedAt
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
                        message.updatedAt = data.updatedAt
                    }
                    return message
                })
                return updatedMessages
            })
        })
    }, [socket])
    // ? delete socket message

    return { messageSet, sendMessage }
}
