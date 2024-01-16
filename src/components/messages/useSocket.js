import io from "socket.io-client"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { SERVER_URL } from "../../utils/consts"
import useAddFile from "../pages/addPosts/useAddFile"

export default function useSocket(room, dbMessagesSet) {

    const { user, messageReplyingTo, messageReplyingToSet, messages, messagesSet, dialogSet } = useContext(Context)
    const { fileArr } = useAddFile()
    const [isSendMessageLoading, isSendMessageLoadingSet] = useState(false)
    const [socket, socketSet] = useState(null)

    useEffect(() => {
        // ! connect
        socketSet(io.connect(SERVER_URL))
        if (!socket) return

        // ! socket receive
        socket.on("receive_message", (data) => {
            dbMessagesSet(prev => [...prev, data])
            isSendMessageLoadingSet(false)
        })

        // ! update socket message
        socket.on("edit_message", (data) => {
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

        // ! delete socket message
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

        // ! disconnect 
        return () => {
            socket.disconnect();
        }
    }, [])

    // ! socket sendMessage
    async function sendMessage() {
        if (!messages?.[0]?.msg) return // no message
        messages?.map(async (message, ind) => {
            const file = await fileArr("/upload/msgContent", [message.file])
            socket.emit("send_message", { msg: message.msg, msgReplyingTo: messageReplyingTo, room, email: user.email, name: user.name, img: user.img, file: file[0] })
        })
        messageReplyingToSet(null)
        messagesSet([{ msg: "", file: "" }]) // null Context messages
        dialogSet({ show: false }) // close dialog with pasted/dropped images
        localStorage.setItem("messagePreviewClicked", 0) // null localStorage messagePreviewClicked; fixes: 1: user sent 2 imgs (messagePreviewClicked was 1) 2: trying to send 1 img (but messagePreviewClicked is 1, and you can not update text in messages[0], cause you're trying to update messages[1])
        isSendMessageLoadingSet(true)
    }
    // ? socket sendMessage

    // ! join room
    useEffect(() => {
        if (!socket) return
        socket.emit("join_room", { room, userEmail: user?.email })
    }, [])

    return { sendMessage, isSendMessageLoading }
}
