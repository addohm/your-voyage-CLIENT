import { ArrowBack, Close } from "@mui/icons-material";

export default function DialogIcons({ dialog, onClose, className = "f jcsb", backIconClassName = "m10 dialogBackIcon", closeIconClassName = "mla m10 dialogCloseIcon" }) {
    return (
        <div className={className || ""}>
            {dialog?.onBack && <ArrowBack className={backIconClassName || ""} onClick={() => dialog?.onBack?.()} />}
            <Close className={closeIconClassName || ""} onClick={onClose} />
        </div>
    )
}
