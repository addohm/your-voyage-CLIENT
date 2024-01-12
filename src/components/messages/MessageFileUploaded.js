import { TaskRounded } from "@mui/icons-material"

export default function MessageFileUploaded({
    onClick,
    fileName,
    downloadFile,
    className = "fc aic wfc bd brL m5 p10",
    iconSize = 120
}) {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <TaskRounded style={{ height: iconSize, width: iconSize }} />
            {!downloadFile
                ?
                <div>{fileName}</div>
                :
                <a href={downloadFile} download className="w100p p15 fw600">{fileName}</a>
            }
        </div>
    )
}
