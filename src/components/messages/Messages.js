import { useContext } from "react"
import Message from "./Message"
import { Context } from "../../Context"
import timestampToDate from "../../utils/timestampToDate"

export default function Messages({ messageReceived }) {

    const { user } = useContext(Context)
    const usedDates = []

    return (
        <div className="fc w100p maw600 p15 m0a aic">
            {messageReceived?.map((message, ind) => {
                const isMyMsg = message?.email === user?.email ? true : false
                let msgDate = timestampToDate(message.createdAt)
                usedDates.includes(msgDate) ? msgDate = "" : usedDates.push(msgDate) // show only unique dates: eg: 10 messages for 2024/1/1, 5 messages for 2024/1/2
                return <Message key={ind} {...message} isMyMsg={isMyMsg} msgDate={msgDate} />
            })}
        </div>
    )
}
