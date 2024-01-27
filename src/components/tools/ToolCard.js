import { useState } from "react";
import { Link } from "react-router-dom";
import Animation from "../animation/Animation";
import ToolCardText from "./ToolCardText";
import "./index.scss"
import ToolCardBtn from "./ToolCardBtn";
import ToolCardIcons from "./ToolCardIcons";
import t from "../../hooks/useT";

export default function ToolCard({ img, title, textEditorValue, type, _id }) {

    const [isCardHovered, setIsCardHovered] = useState(false)

    return (
        <Animation type="opacity">
            <Link to={`post/${type}/${_id}`}>
                <div className="toolCard por w391 h550 brL bg_white zi2" onMouseEnter={() => setIsCardHovered(true)} onMouseLeave={() => setIsCardHovered(false)}>
                    <img className={`brL ${isCardHovered ? "p15 transition15" : "p0 transition15"}`} src={img} />
                    <div className="p15">
                        <div className="title2 my5 ttu brand">{t(type)}</div>
                        <div className="title2 my5">{title}</div>
                        <ToolCardText textEditorValue={textEditorValue} className={!isCardHovered ? "op1 transition05" : "op0 transition05"} />
                    </div>
                    <ToolCardBtn isCardHovered={isCardHovered} />
                    <ToolCardIcons isVisible={isCardHovered} type={type} _id={_id} className="poa r4 b4" />
                </div>
            </Link>
        </Animation>
    )
}
