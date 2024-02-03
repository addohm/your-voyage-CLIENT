import { useContext } from "react"
import { Context } from "../../../Context"

export default function useAddCourseFiles({ ind }) {

    // ! processFiles
    const { pastedOrDroppedImgSet } = useContext(Context)

    function processFiles(processFile) {
        const fileRenamed = new File([processFile], processFile.name.split(".")[0] + Date.now() + "." + processFile.name.split(".")[1]) // eg: image1695902498918.png
        pastedOrDroppedImgSet(prev => ({ ...prev, [ind]: fileRenamed })) // { 0: File, 1: File... }
    }

    // ! saveUploadedFilesOnServer
    function saveUploadedFilesOnServer(e) {
        e.preventDefault()
        if (e.target.files.length > 0) {
            processFiles(e.target.files[0])
        }
    }

    return (
        { saveUploadedFilesOnServer }
    )
}
