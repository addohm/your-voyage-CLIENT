import { useContext, useState } from "react"
import Message from "./Message"
import { Context } from "../../Context"
import timestampToDate from "../../utils/timestampToDate"
import MessageDateTopCopy from "./MessageDateTopCopy"

export default function Messages({ messageReceived }) {

    const { user } = useContext(Context)
    const usedDates = []
    const [messageDateTopCopy, messageDateTopCopySet] = useState(null)

    return (
        <div className="por fc aic w100p maw600 p15 mla mra mt-55">
            {messageReceived?.map((message, ind) => {
                const isMyMsg = message?.email === user?.email ? true : false
                let msgDate = timestampToDate(message.createdAt)
                usedDates.includes(msgDate) ? msgDate = "" : usedDates.push(msgDate) // show only unique dates: eg: 10 messages for 2024/1/1, 5 messages for 2024/1/2
                return <>
                    <MessageDateTopCopy messageDateTopCopy={messageDateTopCopy} />
                    <Message key={ind} {...message} isMyMsg={isMyMsg} msgDate={msgDate} messageDateTopCopySet={messageDateTopCopySet} />
                </>
            })}
        </div>
    )
}
