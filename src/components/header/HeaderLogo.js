import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";
import MainLogo from "./MainLogo";

export default function HeaderLogo({ isVisibleMobileNavSet }) {

    function onClick() {
        isVisibleMobileNavSet(false)
        window.scrollTo(0, 0)
    }

    return (
        <Link to={MAIN_ROUTE} onClick={onClick}>
            <MainLogo />
        </Link>
    )
}
