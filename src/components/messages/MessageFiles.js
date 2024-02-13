import useImgZoom from "../../hooks/useImgZoom"
import isFileImg from "../../utils/isFileImg"
import MessageFileUploaded from "./MessageFileUploaded"

export default function MessageFiles({ file, isVisible = true }) {

    const fileNameOnServer = file?.match(/(.*)\/([^/]*)$/)[2] // text after last slash
    const { imgZoom } = useImgZoom()

    if (!isVisible) return

    return (
        isFileImg(fileNameOnServer)
            ?
            <img key={file} src={file} className="w100p p15 curZoomIn" onClick={imgZoom} />
            :
            file &&
            <MessageFileUploaded
                downloadFile={file}
                fileName={fileNameOnServer}
                className="f fwn aic"
                iconSize={30}
            />
    )
}
