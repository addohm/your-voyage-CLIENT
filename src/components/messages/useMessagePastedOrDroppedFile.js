export default function useMessagePastedOrDroppedFile(messagesSet) {

    // ! processPastedOrDroppedFile
    function processPastedOrDroppedFile(pastedOrDroppedFiles) {
        Object.values(pastedOrDroppedFiles)?.map((file, fileInd) => {
            const fileRenamed = new File([file], file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1]) // eg: image1695902498918.png
            if (fileInd === 0) {
                messagesSet(prev => prev.map((message, ind) => ind === 0 && ({ ...message, file: fileRenamed }))) // in 1 message leave prev msg (text) + add 1 file
            } else {
                messagesSet(prev => [...prev, { msg: "", file: fileRenamed }]) // in other msgs add new files with empty msg
            }
        })
    }

    // ! savePastedOnServer
    function savePastedOnServer(e) {
        if (e.clipboardData.files.length > 0) {
            processPastedOrDroppedFile(e.clipboardData.files)
        }
    }

    // ! saveDroppedOnServer
    function saveDroppedOnServer(e) {
        e.preventDefault()
        if (e.dataTransfer.files.length > 0) {
            processPastedOrDroppedFile(e.dataTransfer.files)
        }
    }

    return (
        { savePastedOnServer, saveDroppedOnServer }
    )
}
