import { ArrowBack, Close } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";

export default function DialogIcons({ className = "f jcsb", backIconClassName = "m10 dialogBackIcon", closeIconClassName = "mla m10 dialogCloseIcon" }) {

    const { dialog, dialogSet } = useContext(Context)
    const { onClose } = dialog

    return (
        <div className={`opAnim10 ${className || ""}`}>
            {dialog?.onBack && <ArrowBack className={backIconClassName || ""} onClick={() => dialog?.onBack?.()} />}
            <Close className={closeIconClassName || ""} onClick={() => onClose || dialogSet({ show: false })} />
        </div>
    )
}
