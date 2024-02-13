import { AccessTimeFilledRounded } from '@mui/icons-material'
import t from "../../hooks/useT"

export default function TimeToReadText({ value }) {

    function timeToReadText(value) {
        return Math.ceil(value?.split(" ").length / 200) + " min"
    }

    return (
        value &&
        <div className='fc aic mla wfc' title={t("time to read")}>
            <AccessTimeFilledRounded style={{ width: 30, height: 30, pointerEvents: "none" }} />
            <span className="ml5 fz14">{timeToReadText(value)}</span>
        </div>
    )
}
