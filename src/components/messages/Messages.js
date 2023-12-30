import { useContext } from "react"
import Message from "./Message"
import { Context } from "../../Context"

export default function Messages({ messageReceived }) {

    const { user } = useContext(Context)

    return (
        <div className="fc w100p maw600 p15 m0a aic">
            {messageReceived?.map((message, ind) => {
                const isMyMsg = message?.email === user?.email ? true : false
                return <Message key={ind} {...message} isMyMsg={isMyMsg} />
            })}
        </div>
    )
}
