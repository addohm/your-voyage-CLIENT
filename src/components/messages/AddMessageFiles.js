import InputFile from "../form/InputFile";
import useUploadedPastedDroppedFilesToMsgFiles from "./useUploadedPastedDroppedFilesToMsgFiles";
import "./index.scss";

export default function AddMessageFiles({ className }) {

    const { uploadedPastedDroppedFilesToMsgFiles } = useUploadedPastedDroppedFilesToMsgFiles()

    return (
        <InputFile
            onChange={(e) => uploadedPastedDroppedFilesToMsgFiles(e.target.files)}
            className={`addMessageFiles ${className ? className : ""}`}
        />
    )
}
