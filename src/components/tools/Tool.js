import useWindowSize from "../../hooks/useWindowSize"
import Animation from "../animation/Animation"
import ToolCardTitle from "./ToolCardTitle"

export default function Tool({ img, name, ind, toolCardsHidden, onClick }) {

    let varHeight = 250 + ind * 20 // add +20px to each next Tool height
    varHeight = "h" + varHeight
    const { isMobile } = useWindowSize()

    return (
        // uncomment for animation
        // !toolCardsHidden &&
        <Animation
            type="left" delay={ind / 2}
        >
            <div className={`w391 brL por ${toolCardsHidden ? "fadeAway" : "db"} tool cursorArrowRightWhite`} onClick={onClick}>
                <img className={`w100p ofCover ${varHeight} bsh hoverBlur1`} src={img} />
                <div className="fcc">
                    <ToolCardTitle name={name} animationType={isMobile ? "top" : "top"} />
                </div>
            </div>
        </Animation>
    )
}
