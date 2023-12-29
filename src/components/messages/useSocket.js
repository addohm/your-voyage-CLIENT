import io from "socket.io-client"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import getMsgColor from "./getMsgColor"

export default function useSocket() {

    const { user } = useContext(Context)

    // ! socket send
    const [message, messageSet] = useState("") // input value
    const socket = io.connect("http://localhost:5001") // TODO !!!
    const room = 123 // TODO !!!

    function sendMessage() {
        socket.emit("send_message", { message, room, email: user.email })
    }

    useEffect(() => {
        socket.emit("join_room", room) // join room 1 time
    }, [])
    // ? socket send

    // ! socket receive
    const [messageReceived, messageReceivedSet] = useState([]) // message from another user

    useEffect(() => {
        socket.on("receive_message", (data) => {
            const msgColor = getMsgColor(data?.email, user?.email)
            messageReceivedSet(prev => [...prev, { msg: data?.message, msgColor }])
        })
    }, [socket])
    // ? socket receive

    return { messageSet, sendMessage, messageReceived }
}
