import { useContext, useEffect } from "react"
import Message from "./Message"
import { Context } from "../../Context"
import timestampToDate from "../../utils/timestampToDate"
import goToBottom from "../../utils/goToBottom"

export default function Messages({ messageReceived, msgCurTopDateSet }) {

    const { user } = useContext(Context)
    useEffect(() => goToBottom(), [])

    return (
        <div className="por fc aic w100p maw600 mla mra mt-55 pt40 pl15 pb15 messages">
            {messageReceived?.map((message, ind) => {
                const isMyMsg = message?.userId === user?._id ? true : false
                let msgDate = timestampToDate(message.createdAt)
                return <>
                    <Message key={message._id} {...message} className={isMyMsg ? "mla" : "mra"} isMyMsg={isMyMsg} msgDate={msgDate} msgCurTopDateSet={msgCurTopDateSet} />
                </>
            })}
        </div>
    )
}
