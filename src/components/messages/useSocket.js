import io from "socket.io-client"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"

export default function useSocket(room) {

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
    const [messageReceived, messageReceivedSet] = useState([]) // message from another user

    useEffect(() => {
        socket.on("receive_message", (data) => {
            messageReceivedSet(prev => [...prev, data])
        })
    }, [socket])
    // ? socket receive

    return { messageSet, sendMessage, messageReceived }
}
