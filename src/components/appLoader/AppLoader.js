import { useEffect, useState } from "react";
import Dots from "../dots/Dots"
import MainLogo from "../header/MainLogo";

export default function AppLoader() {

    // test commit
    const [isAppLoaded, isAppLoadedSet] = useState(false)
    const [isTimePassed, isTimePassedSet] = useState(false)

    const handleSiteLoad = () => isAppLoadedSet(true)
    useEffect(() => {
        setTimeout(() => isTimePassedSet(true), 2500);
        window.addEventListener('load', handleSiteLoad);
        return () => window.removeEventListener('load', handleSiteLoad)
    }, [])

    // fadeOut = isAppLoaded && isTimePassed 
    return (
        <div className={`fcc pof t0 l0 zi10 w100p h100p miw100vw mih100vh bg_white appLoaderAnimation ${isAppLoaded && isTimePassed ? "appLoaderAnimationFadeOut" : ""}`}>
            <MainLogo className="fz30" />
            <Dots className="mt30 fz50 opAnim10" />
        </div>
    )
}
