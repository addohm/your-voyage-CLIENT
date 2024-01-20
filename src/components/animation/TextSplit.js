import { useRef } from "react";

export default function TextSplit({ str, isColor = false }) {

    const ref = useRef(null)

    function onMouseEnter(ind) {
        isColor && ref?.current?.querySelector(`.letter${ind}`).classList.add("brand");
    }

    return (
        // UNCOMMENT TO WORK
        // <div ref={ref}>
        //     {str && str?.split("")?.map((char, ind) => <span key={ind} onMouseEnter={() => onMouseEnter(ind)} className={`hoverBrandColor hoverFont500 hoverFontTop letter${ind}`}>{char}</span>)}
        // </div>
        // WITHOUT ANIMATION
        str
    )
}
