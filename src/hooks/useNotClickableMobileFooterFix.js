import { useLocation } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import { MAIN_ROUTE } from "../utils/consts";

export default function useNotClickableMobileFooterFix() {

    // last img before footer is 100vh, so it's above footer, so footer is not clickable, z-index is not helpful in this case
    const { isMobile } = useWindowSize()
    const location = useLocation().pathname
    const notClickableMobileFooterFix = isMobile && location === MAIN_ROUTE ? "pb200" : ""

    return { notClickableMobileFooterFix }
}
