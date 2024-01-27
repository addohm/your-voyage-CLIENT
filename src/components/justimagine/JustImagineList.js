import diamond from "../diamond/img/diamondColor.svg"
import list from "./list"
import t from '../../hooks/useT'

export default function JustImagineList() {
    return (
        <div className="wfc m0a">
            {list.map(({ text }) => (
                <div className="f aic g10 mb15 wfc">
                    <div className="por">
                        <img src={diamond} className="diamond" />
                        {/* second diamond is for glow animation */}
                        <img src={diamond} className="poa l0 t0" />
                    </div>
                    <div className="maw800 pb7">{t(text)}</div>
                </div>
            ))}
        </div>
    )
}
