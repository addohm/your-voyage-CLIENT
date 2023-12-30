import { useParams } from "react-router-dom";
import Socket from "./Socket";

export default function SocketHub() {

    const { token } = useParams()

    return (
        <Socket room={token} />
    )
}
