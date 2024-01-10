import InputFile from "../form/InputFile";
import useUploadedPastedDroppedFilesToMsgFiles from "./useUploadedPastedDroppedFilesToMsgFiles";

export default function AddMessageFiles() {

    const { uploadedPastedDroppedFilesToMsgFiles } = useUploadedPastedDroppedFilesToMsgFiles()

    return (
        <InputFile onChange={(e) => uploadedPastedDroppedFilesToMsgFiles(e.target.files)} />
    )
}
