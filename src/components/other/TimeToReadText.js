import { AccessTimeFilledRounded } from '@mui/icons-material'

export default function TimeToReadText({ value }) {

    function timeToReadText(value) {
        return Math.ceil(value?.split(" ").length / 200) + " min"
    }

    return (
        value &&
        <div className='fc aic mla wfc'>
            <AccessTimeFilledRounded style={{ width: 30, height: 30 }} />
            <span className="ml5">{timeToReadText(value)}</span>
        </div>
    )
}
