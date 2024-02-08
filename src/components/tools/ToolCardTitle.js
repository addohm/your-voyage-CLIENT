import Animation from "../animation/Animation";
import ReviewArrow from "../review/ReviewArrow"
import ToolCardTitleAddTool from "./ToolCardTitleAddTool";
import { useContext } from "react";
import { Context } from "../../Context";

export default function ToolCardTitle({ name, translatedName, animationType, toolNameClicked, toolCardsHiddenSet }) {

    const thisTitleClicked = name === toolNameClicked
    const iconSize = 40

    const { theme, lang } = useContext(Context)

    return (
        <div
            className={`por f fwn ${thisTitleClicked && lang === "zh" ? "brand" : ""} ${lang === "zh" ? "hoverBrandColor hoverFontTop" : ""} curPointer`}
            onClick={() => thisTitleClicked && toolCardsHiddenSet(false)}
        >
            {thisTitleClicked &&
                <ReviewArrow
                    onClick={() => toolCardsHiddenSet(false)}
                    height={iconSize}
                    width={iconSize}
                    className="poa l-40"
                    animationType="scale"
                />
            }

            {(translatedName || name)?.split("").map((char, ind) => {

                const delayType1 = ind / 20 // ALL chars float with delay
                const delayType2 = thisTitleClicked ? ind / 20 : 0 // ONE char float with delay

                return (
                    <Animation type={animationType} delay={delayType1}>
                        <span
                            style={{ WebkitTextStroke: `1px ${theme === "light" ? "black" : "white"}` }}
                            className={`fz37 p4 ${thisTitleClicked ? "font3 hoverFont3" : "font4 hoverFont4"}`}
                        >
                            {char}
                        </span>
                    </Animation>
                )
            })}
            <ToolCardTitleAddTool thisTitleClicked={thisTitleClicked} iconSize={iconSize} name={name} />
        </div>
    )
}
