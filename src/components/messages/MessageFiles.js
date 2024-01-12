import isFileImg from "../../utils/isFileImg"
import MessageFileUploaded from "./MessageFileUploaded"

export default function MessageFiles({ file }) {

    const fileNameOnServer = file?.match(/(.*)\/([^/]*)$/)[2] // text after last slash

    return (
        isFileImg(fileNameOnServer)
            ?
            <img key={file} src={file} className="w100p p15" />
            :
            file &&
            <MessageFileUploaded
                downloadFile={file}
                fileName={fileNameOnServer}
                className="f fwn aic"
            />
    )
}
