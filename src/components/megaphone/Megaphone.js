import React from "react"
import megaphone from "./megaphone.svg"
import "./index.scss"
import MegaphoneText from "./MegaphoneText"
import t from "../../hooks/useT"

export default function Megaphone() {
    return (
        <div className="por megaphoneWrap h500 pt150">
            <img src={megaphone} className="megaphone" />
            <div className="fc g15">
                <MegaphoneText text={t("Start Your")} />
                <MegaphoneText text={t("Career Path")} />
            </div>
        </div>
    )
}
