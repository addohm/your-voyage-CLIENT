import { Link } from "react-router-dom";

export default function Room({ img, name, roomToken, msg }) {
    return (
        <Link to={`/message/${roomToken}`} className="f fwn g15 w300 m0a bg_white p brL">
            <img className="h60 w60 br50" src={img} />
            <div className="fc black">
                <div className="fw600 mt3">{name}</div>
                <div className="textLines2">{msg}</div>
            </div>
        </Link>
    )
}
