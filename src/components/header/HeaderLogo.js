import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";

export default function HeaderLogo({ isVisibleMobileNavSet }) {

    function onClick() {
        isVisibleMobileNavSet(false)
        window.scrollTo(0, 0)
    }

    return (
        <Link to={MAIN_ROUTE} onClick={onClick}>
            <div className='fz20 brand hoverScale hoverFont500'>XY Consulting</div>
        </Link>
    )
}
