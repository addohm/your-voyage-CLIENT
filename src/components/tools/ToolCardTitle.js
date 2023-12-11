import Animation from "../animation/Animation";
import ReviewArrow from "../review/ReviewArrow"
import ToolCardTitleAddTool from "./ToolCardTitleAddTool";

export default function ToolCardTitle({ name, animationType, toolNameClicked, toolCardsHiddenSet }) {

    const thisTitleClicked = name === toolNameClicked
    const iconSize = 40

    return (
        <div className="f por" onClick={() => thisTitleClicked && toolCardsHiddenSet(false)}>
            {thisTitleClicked &&
                <ReviewArrow
                    onClick={() => toolCardsHiddenSet(false)}
                    height={iconSize}
                    width={iconSize}
                    className="poa l-40"
                    animationType="scale"
                />
            }

            {name.split("").map((char, ind) => {

                const delayType1 = ind / 20 // ALL chars float with delay
                const delayType2 = thisTitleClicked ? ind / 20 : 0 // ONE char float with delay

                return (
                    <Animation type={animationType} delay={delayType1}>
                        <span className={`fz37 ts p4 ${thisTitleClicked ? "font3 hoverFont3" : "font4 hoverFont4"}`}>{char}</span>
                    </Animation>
                )
            })}
            <ToolCardTitleAddTool thisTitleClicked={thisTitleClicked} iconSize={iconSize} name={name} />
        </div>
    )
}
