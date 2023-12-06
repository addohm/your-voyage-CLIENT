import React from "react"
import megaphone from "./megaphone.svg"
import "./index.scss"
import MegaphoneText from "./MegaphoneText"

export default function Megaphone() {
    return (
        <div className="megaphoneWrap h500 pt150">
            <img src={megaphone} className="megaphone" />
            <div className="fc g15">
                <MegaphoneText text="Start Your" />
                <MegaphoneText text="Career Path" />
            </div>
        </div>
    )
}
