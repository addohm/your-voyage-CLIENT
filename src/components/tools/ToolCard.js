import { Link } from "react-router-dom";
import Animation from "../animation/Animation";
import ToolCardText from "./ToolCardText";

export default function ToolCard({ img, title, textEditorValue, type, _id }) {
    return (
        <Animation type="opacity">
            <Link to={`/${type}/${_id}`}>
                <div className="w391 brL">
                    <img className="w100p" src={img} />
                    <div className="title2 tac">{title}</div>
                    <ToolCardText textEditorValue={textEditorValue} />
                </div>
            </Link>
        </Animation>
    )
}
