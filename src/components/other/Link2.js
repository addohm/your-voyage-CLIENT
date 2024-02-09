import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import "./index.scss"

export default function Link2(props) {

    const location = useLocation().pathname
    const visitedLinkClassName = "brandi fw600 btnBrand"

    const { isVisibleMobileNavSet } = useContext(Context)
    const className = `hoverBrandColor hoverFont500 hoverFontTop Link2BtnHover ${location === props.to ? visitedLinkClassName : ""}`

    return (
        <Link
            onClick={() => isVisibleMobileNavSet(false)}
            {...props}
            // className must bе after {...props}
            className={className}
        >
            {props.children}
        </Link>
    )
}
