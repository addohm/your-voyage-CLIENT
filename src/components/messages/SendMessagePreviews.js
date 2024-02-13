import isFileImg from "../../utils/isFileImg"
import MessageFileUploaded from "./MessageFileUploaded"
import SendMessagePreviewImg from "./SendMessagePreviewImg"

export default function SendMessagePreviews({ messages, messagePreviewClickedSet, messagePreviewClicked, messagePreviewClicked2StateWithDelaySet }) {

    const mainPreview = messages?.[localStorage.getItem("messagePreviewClicked")]?.file

    function switchMessagePreviewClicked(ind) {
        messagePreviewClickedSet(ind)
        document.querySelector(".sendMessageBigMainPreview").scrollIntoView({ behavior: "smooth" })
        localStorage.setItem("messagePreviewClicked", ind)
        setTimeout(() => messagePreviewClicked2StateWithDelaySet(ind), 1); // so TextEditor in useMessages can get correct updated index
    }

    const uploadedFilePreviewStyle = (ind) => ind === messagePreviewClicked ? "uploadedFilePreview bd_brand" : "uploadedFilePreview"

    return (
        <>
            <div className="tac fcc mb">
                {/* small previews */}
                {messages.length > 1 &&
                    messages?.map((message, ind) => {

                        const fileName = message?.file?.name

                        return (
                            isFileImg(fileName)
                                ?
                                <SendMessagePreviewImg
                                    className={uploadedFilePreviewStyle(ind)}
                                    file={message?.file}
                                    onClick={() => switchMessagePreviewClicked(ind)}
                                />
                                :
                                <MessageFileUploaded
                                    className={uploadedFilePreviewStyle(ind)}
                                    onClick={() => switchMessagePreviewClicked(ind)}
                                    fileName={fileName}
                                />
                        )
                    })}
            </div>
            {/* big main preview */}
            <div className="fcc mb10 sendMessageBigMainPreview">
                {isFileImg(messages?.[0]?.file.name)
                    ?
                    <SendMessagePreviewImg
                        file={mainPreview}
                        className="db w300 h300 ofCover m0a brL"
                    />
                    :
                    messages?.length === 1 &&
                    <MessageFileUploaded fileName={messages?.[0]?.file.name} className="uploadedFilePreview" />
                }
            </div>
        </>
    )
}
