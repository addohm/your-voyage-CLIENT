import { useEffect, useState } from "react";
import Dots from "../dots/Dots"

export default function AppLoader() {

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
            <div className="fz40 opAnim10">
                XY Consulting
            </div>
            <Dots className="mt50 fz50 opAnim10" />
        </div>
    )
}
