import Message from "./Message"

export default function Messages({ messageReceived }) {
    return (
        <div className="fc wfc m0a aic">
            {messageReceived?.map(({ msg, msgColor }, ind) => <Message key={ind} msg={msg} msgColor={msgColor} />)}
        </div>
    )
}
