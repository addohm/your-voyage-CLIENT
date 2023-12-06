import React from "react"
import diamondBlack from "./img/diamondBlack.svg"
import diamondColor from "./img/diamondColor.svg"
import './index.scss'

export default function Diamond({ rotate, changePoint, top, right }) {
    return (
        <div className="opAnim">
            <img src={changePoint ? diamondColor : diamondBlack} className="diamond" style={{ transform: `rotate(${rotate}deg) scale(${rotate * 0.005})`, position: 'fixed', zIndex: -1, top, right }} />
            <img src={changePoint ? diamondColor : diamondBlack} style={{ transform: `rotate(${rotate}deg) scale(${rotate * 0.005})`, position: 'fixed', top, right }} />
        </div>
    );
}
