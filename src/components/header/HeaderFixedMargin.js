import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../utils/consts"

export default function HeaderFixedMargin() {

    const location = useLocation().pathname

    // if header has fixes position, reserve its space
    // all pages not main
    return (
        location !== MAIN_ROUTE &&
        <div className='h120 w100p'></div>
    )
}
