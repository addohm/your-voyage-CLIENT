import { useEffect, useState } from "react";
import Dots from "../dots/Dots"
import MainLogo from "../header/MainLogo";

export default function AppLoader() {

    const [isAppLoaded, isAppLoadedSet] = useState(false)
    const [isTimePassed, isTimePassedSet] = useState(false)

    useEffect(() => {
        setTimeout(() => isTimePassedSet(true), 2500);
        window.addEventListener('load', isAppLoadedSet(true));
    }, [])

    // fadeOut = isAppLoaded && isTimePassed 
    return (
        <div className={`fcc pof t0 l0 zi10 w100p h100p miw100vw mih100vh bg_white appLoaderAnimation ${isAppLoaded && isTimePassed ? "appLoaderAnimationFadeOut" : ""}`}>
            <MainLogo className="fz30" />
            <Dots className="mt30 fz50 opAnim10" />
        </div>
    )
}
