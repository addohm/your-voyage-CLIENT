import { useEffect } from "react";
import clickSendMessageIcon from "./clickSendMessageIcon";

export default function useSendMessageShortCut() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ctrl + Enter
            if (event.ctrlKey && event.key === "Enter") {
                clickSendMessageIcon()
            }
        }
        document.body.addEventListener('keydown', handleKeyDown)
        return () => document.body.removeEventListener('keydown', handleKeyDown)
    }, [])

    return ""
}
