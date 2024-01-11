export default function MessageFiles({ file }) {

    const fileNameOnServer = file?.match(/(.*)\/([^/]*)$/)[2] // text after last slash
    const fileExtension = file?.match(/[^.]+$/)[0] // text after last .
    const imgExtensions = ["jpeg", "jpg", "png", "gif", "bmp", "tiff", "tif", "psd", "eps", "svg", "webp", "heif", "heic", "jfif", "jfi", "jpe", "jpf", "jpx", "jp2", "j2k", "jpc", "pgf", "raf", "raw", "cr2", "nef", "orf", "arw", "srf", "sr2", "dng"]

    return (
        imgExtensions?.includes(fileExtension)
            ?
            <img key={file} src={file} className="w100p p15" />
            :
            <a href={file} download className="w100p p15 fw600">{fileNameOnServer}</a>
    )
}
