import { useState } from "react";
import { Link } from "react-router-dom";
import Animation from "../animation/Animation";
import ToolCardText from "./ToolCardText";
import "./index.scss"
import { Button } from "@mui/material";

export default function ToolCard({ img, title, textEditorValue, type, _id }) {

    const [isCardHovered, setIsCardHovered] = useState(false)

    return (
        <Animation type="opacity">
            <Link to={`/${type}/${_id}`}>
                <div className="toolCard por w391 h550 brL" onMouseEnter={() => setIsCardHovered(true)} onMouseLeave={() => setIsCardHovered(false)}>
                    <img className={`${isCardHovered ? "p15 transition15" : "p0 transition15"}`} src={img} />
                    <div className="p15">
                        <div className="title2 my5 ttu brand">{type}</div>
                        <div className="title2 my5">{title}</div>
                        <ToolCardText textEditorValue={textEditorValue} className={!isCardHovered ? "op1 transition05" : "op0 transition05"} />
                    </div>
                    {isCardHovered &&
                        <Animation type="left">
                            <Button className="poa b40 l140" variant="outlined">READ MORE</Button>
                        </Animation>
                    }
                </div>
            </Link>
        </Animation>
    )
}
