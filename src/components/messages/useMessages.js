import { Close, Send } from "@mui/icons-material"
import { useEffect, useState } from "react"
import TextEditor from "../textEditor/TextEditor"
import SendMessagePreviews from "./SendMessagePreviews"
import clickSendMessageIcon from "./clickSendMessageIcon"
import MobileDialog from "../dialog/MobileDialog"

export default function useMessages(dialogSet) {

    const [messages, messagesSet] = useState([{ msg: "", file: "" }]) // [{ msg: "", file: File }, {...}]
    const [messagePreviewClicked, messagePreviewClickedSet] = useState(0) // in Dialog
    const [messagePreviewClicked2StateWithDelay, messagePreviewClicked2StateWithDelaySet] = useState(0) // in Dialog

    // ! null localStorage's messagePreviewClicked on every reload so uploadedPastedDroppedFilesToMsgFiles can work
    useEffect(() => { localStorage.setItem("messagePreviewClicked", 0) }, [])

    useEffect(() => {
        if (!messages?.[0]?.file) return

        // ! ADD MESSAGE FILES DIALOG
        dialogSet({
            show: true,
            // title: `for debug: messagePreviewClicked: ${messagePreviewClicked}, messagePreviewClicked2StateWithDelay: ${messagePreviewClicked2StateWithDelay} "localStorage.getItem("messagePreviewClicked")": ${localStorage.getItem("messagePreviewClicked")}`,
            onClose: () => messagesSet([{ msg: "", file: "" }]),
            children:
                <MobileDialog>
                    <div className="fc miw100vw mih100vh">

                        <SendMessagePreviews messages={messages} messagePreviewClickedSet={messagePreviewClickedSet} messagePreviewClicked={messagePreviewClicked} messagePreviewClicked2StateWithDelaySet={messagePreviewClicked2StateWithDelaySet} />

                        <div className="fcc">
                            <TextEditor
                                name="msg"
                                className="maw600 p15"
                                value={messages?.[messagePreviewClicked2StateWithDelay]?.msg}
                                // valueSet uses localStorage's messagePreviewClicked cause state's messagePreviewClicked is always frozen to 0 inside messagesSet
                                valueSet={(value) => messagesSet(prev => prev.map((message, ind) => ind === Number(localStorage.getItem("messagePreviewClicked") ? localStorage.getItem("messagePreviewClicked") : 0) ? ({ ...message, msg: value }) : message))}
                                placeholder="...add your message"
                            />

                            <div title="ctrl + enter">
                                <Send onClick={clickSendMessageIcon} className="ml10" />
                            </div>
                        </div>
                    </div>
                </MobileDialog>
        })
    }, [messages?.[0]?.file, messagePreviewClicked, messagePreviewClicked2StateWithDelay])

    // ! sync messagePreviewClicked with localStorage, so "add Messages With Many Files Round 2,3,4,5" can work
    useEffect(() => {
        messagePreviewClickedSet(Number(localStorage.getItem("messagePreviewClicked")))
        messagePreviewClicked2StateWithDelaySet(Number(localStorage.getItem("messagePreviewClicked")))
    }, [localStorage.getItem("messagePreviewClicked")])

    return { messages, messagesSet }
}
