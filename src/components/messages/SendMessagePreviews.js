export default function SendMessagePreviews({ messages, messagePreviewClickedSet, messagePreviewClicked }) {

    const mainPreview = messages?.[messagePreviewClicked]?.file

    return (
        <div className="tac">
            {messages?.map((message, ind) => {
                return (
                    <img
                        src={URL.createObjectURL(message?.file)}
                        className="w150 h150"
                        onClick={() => (messagePreviewClickedSet(ind), localStorage.setItem("messagePreviewClicked", ind))}
                    />
                )
            })}
            <img src={URL.createObjectURL(mainPreview)} className="db w300 h300 m0a" />
        </div>
    )
}
