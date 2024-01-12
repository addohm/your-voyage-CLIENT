import isFileImg from "../../utils/isFileImg"
import MessageFileUploaded from "./MessageFileUploaded"
import SendMessagePreviewImg from "./SendMessagePreviewImg"

export default function SendMessagePreviews({ messages, messagePreviewClickedSet, messagePreviewClicked }) {

    const mainPreview = messages?.[messagePreviewClicked]?.file

    function switchMessagePreviewClicked(ind) {
        messagePreviewClickedSet(ind)
        localStorage.setItem("messagePreviewClicked", ind)
    }

    return (
        <div className="tac">
            {/* small previews */}
            {messages.length > 1 &&
                messages?.map((message, ind) => {

                    const fileName = message?.file?.name

                    return (
                        isFileImg(fileName)
                            ?
                            <SendMessagePreviewImg
                                file={message?.file}
                                className="w150 h150"
                                onClick={() => switchMessagePreviewClicked(ind)}
                            />
                            :
                            <MessageFileUploaded
                                onClick={() => switchMessagePreviewClicked(ind)}
                                fileName={fileName}
                            />
                    )
                })}
            {/* big main preview */}
            {isFileImg(messages?.[0]?.file.name)
                ?
                <SendMessagePreviewImg
                    file={mainPreview}
                    className="db w300 h300 m0a"
                />
                :
                messages?.length === 1 &&
                <MessageFileUploaded fileName={messages?.[0]?.file.name} />
            }
        </div>
    )
}
