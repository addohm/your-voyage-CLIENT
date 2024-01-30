import diamond from "../diamond/img/diamondColor.svg"
import list from "./list"
import t from '../../hooks/useT'

export default function JustImagineList() {
    return (
        <div className="wfc m0a">
            {list.map(({ text }) => (
                <div className="f fwn g10 mb15 wfc">
                    <div className="por">
                        <img src={diamond} className="diamond mt3" />
                        {/* second diamond is for glow animation */}
                        <img src={diamond} className="poa l0 t0 mt3" />
                    </div>
                    <div className="maw800 pb7">{t(text)}</div>
                </div>
            ))}
        </div>
    )
}
