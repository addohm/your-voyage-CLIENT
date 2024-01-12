import { TaskRounded } from "@mui/icons-material"

export default function MessageFileUploaded({ onClick, fileName, downloadFile, className = "fcc" }) {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <TaskRounded />
            {!downloadFile
                ?
                <div>{fileName}</div>
                :
                <a href={downloadFile} download className="w100p p15 fw600">{fileName}</a>
            }
        </div>
    )
}
