import { useState } from "react"
import MessageEdit from "./MessageEdit"
import "./index.scss"

export default function Message(props) {

    const { msg, isMyMsg, _id, email } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    return (
        <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"}`}
            contentEditable={isContentEditable}
        >
            <div>{msg}</div>
            <MessageEdit isVisible={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} />
        </div>
    )
}
