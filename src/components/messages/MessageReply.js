import { Reply } from "@mui/icons-material"
import { useContext } from "react"
import { Context } from "../../Context"

export default function MessageReply({ img, name, msg }) {

    const { messageReplyingToSet } = useContext(Context)

    return (
        <Reply
            className="poa r-30 t8"
            style={{ transform: "rotateY(180deg)" }}
            onClick={() => messageReplyingToSet({ img, name, msg })}
        />
    )
}
