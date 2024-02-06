import InputFile from "../form/InputFile";
import useUploadedPastedDroppedFilesToMsgFiles from "./useUploadedPastedDroppedFilesToMsgFiles";
import "./index.scss";
import safeFileTypesAttribute from "../../utils/safeFileTypesAttribute"
import validateFileTypes from "../../utils/validateFileTypes";
import validateFileSize from "../../utils/validateFileSize";

export default function AddMessageFiles({ className }) {

    const { uploadedPastedDroppedFilesToMsgFiles } = useUploadedPastedDroppedFilesToMsgFiles()

    function addMessageFiles(e) {
        const isValidFileTypes = validateFileTypes(e.target.files)
        const isValidFileSize = validateFileSize(e.target.files)
        if (!isValidFileTypes || !isValidFileSize) return
        uploadedPastedDroppedFilesToMsgFiles(e.target.files)
    }

    return (
        <InputFile
            onChange={addMessageFiles}
            className={`addMessageFiles ${className ? className : ""}`}
            accept={safeFileTypesAttribute}
        />
    )
}
