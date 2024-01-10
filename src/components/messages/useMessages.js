import { Close, Send } from "@mui/icons-material"
import { useEffect, useState } from "react"
import TextEditor from "../textEditor/TextEditor"
import SendMessagePreviews from "./SendMessagePreviews"
import useInterval from "../../hooks/useInterval"

export default function useMessages(dialogSet) {

    const [messages, messagesSet] = useState([{ msg: "", file: "" }]) // [{ msg: "", file: File }, {...}]
    const [messagePreviewClicked, messagePreviewClickedSet] = useState(0) // in Dialog
    const { interval } = useInterval(700)

    function clickSendIcon() {
        // clicks real send icon; this icon is fake
        const icon = document.querySelector(".sendMsgIcon")
        const clickEvent = new Event('click', { bubbles: true })
        if (!icon) return
        icon.dispatchEvent(clickEvent)
    }

    useEffect(() => {
        if (!messages?.[0]?.file) return

        dialogSet({
            show: true,
            title: "",
            closeIcon: <Close onClick={() => (dialogSet({ show: false }), messagesSet([{ msg: "", file: "" }]))} />,
            children:
                <div className="fc w100vw h100vh">

                    <SendMessagePreviews messages={messages} messagePreviewClickedSet={messagePreviewClickedSet} messagePreviewClicked={messagePreviewClicked} />

                    <div className="fcc">
                        <TextEditor
                            name="msg"
                            className="maw600"
                            value={messages?.[messagePreviewClicked]?.msg}
                            // valueSet uses localStorage's messagePreviewClicked cause state's messagePreviewClicked is always frozen to 0 inside messagesSet
                            valueSet={(value) => messagesSet(prev => prev.map((message, ind) => ind === Number(localStorage.getItem("messagePreviewClicked") ? localStorage.getItem("messagePreviewClicked") : 0) ? ({ ...message, msg: value }) : message))}
                        />

                        <Send onClick={clickSendIcon} className="ml10" />
                    </div>
                </div>
        })
    }, [interval, messages?.[0]?.file])

    return { messages, messagesSet }
}
