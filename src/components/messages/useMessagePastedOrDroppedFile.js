import validateFileSize from "../../utils/validateFileSize"
import validateFileTypes from "../../utils/validateFileTypes"
import useUploadedPastedDroppedFilesToMsgFiles from "./useUploadedPastedDroppedFilesToMsgFiles"

export default function useMessagePastedOrDroppedFile(messagesSet) {

    const { uploadedPastedDroppedFilesToMsgFiles } = useUploadedPastedDroppedFilesToMsgFiles()

    // ! processPastedOrDroppedFile
    function processPastedOrDroppedFile(pastedOrDroppedFiles) {
        const isValidFileTypes = validateFileTypes(pastedOrDroppedFiles)
        const isValidFileSize = validateFileSize(pastedOrDroppedFiles)
        if (!isValidFileTypes || !isValidFileSize) return
        uploadedPastedDroppedFilesToMsgFiles(pastedOrDroppedFiles)
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
