import { Link } from "react-router-dom";

export default function Room({ img, name, room, msg }) {
    return (
        <Link to={`/message/${room}`} className="f fwn g15 w300 mb bg_white p brL">
            <img className="h60 w60 br50" src={img} />
            <div className="fc black">
                <div className="fw600 mt3">{name}</div>
                <div className="textLines2">{msg}</div>
            </div>
        </Link>
    )
}
