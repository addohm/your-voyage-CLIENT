import { useParams } from "react-router-dom";
import AllMsgsAndAddMsg from "../messages/AllMsgsAndAddMsg";

export default function SupportMsgs() {

    const { token } = useParams()

    return (
        <AllMsgsAndAddMsg token={token} type="support" />
    )
}
