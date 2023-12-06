import diamond from "../diamond/img/diamondColor.svg"
import list from "./list"

export default function JustImagineList() {
    return (
        list.map(({ text }) => (
            <div className="white fcc g10 mb15">
                <div className="por">
                    <img src={diamond} className="diamond" />
                    {/* second diamond is for glow animation */}
                    <img src={diamond} className="poa l0 t0" />
                </div>
                <div className="maw800">{text}</div>
            </div>
        ))
    )
}
