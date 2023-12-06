import { useRef } from "react";

export default function TextSplit({ str, isColor = false }) {

    const ref = useRef(null)

    function onMouseEnter(ind) {
        isColor && ref.current.querySelector(`.letter${ind}`).classList.add("brand");
    }

    return (
        <div ref={ref}>
            {str.split("").map((char, ind) => <span key={ind} onMouseEnter={() => onMouseEnter(ind)} className={`hoverBrandColor hoverFont500 hoverFontTop letter${ind}`}>{char}</span>)}
        </div>
    )
}
