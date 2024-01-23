import { Reply } from "@mui/icons-material"
import { useContext } from "react"
import { Context } from "../../Context"
import goToBottom from "../../utils/goToBottom"

export default function MessageReply({ img, name, msg }) {

    const { messageReplyingToSet } = useContext(Context)

    function prepareReply() {
        messageReplyingToSet({ img, name, msg })
        goToBottom()
    }

    return (
        <Reply
            className="poa l10 t50"
            style={{ transform: "rotateY(180deg)" }}
            onClick={prepareReply}
        />
    )
}
