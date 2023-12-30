import { Link } from "react-router-dom";

export default function Room({ img, name, roomToken }) {
    // todo 1
    return (
        <Link to={`/message/${roomToken}`} className="f wfc m0a">
            <img src={img} />
            <div>{name}</div>
        </Link>
    )
}
