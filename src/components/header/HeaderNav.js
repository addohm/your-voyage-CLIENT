import HeaderLoginBtn from "./HeaderLoginBtn";
import t from '../../hooks/useT';
import goToBottom from "../../utils/goToBottom";
import { useNavigate } from "react-router-dom";
import delay from '../../utils/delay';
import { MAIN_ROUTE } from "../../utils/consts";

export default function HeaderNav({ isVisible = true, className }) {

    const navigate = useNavigate()

    async function goTo(className) {
        navigate(MAIN_ROUTE)
        await delay(100);

        document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
            // when animation done go once again
            document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        }, 2000);
    }

    return (
        isVisible &&
        <div className={`fcc g15 headerNav ${className}`}>
            <div className='header__btn' onClick={() => goToBottom("about")}>{t("About")}</div>
            <div className='header__btn' onClick={() => goTo("coaching")}>{t("Coaching")}</div>
            <div className='header__btn' onClick={() => goTo("tools")}>{t("Tools")}</div>
            <HeaderLoginBtn />
        </div>
    )
}
