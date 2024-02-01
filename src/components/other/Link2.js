import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function Link2(props) {

    const { isVisibleMobileNavSet } = useContext(Context)

    return (
        <Link
            onClick={() => isVisibleMobileNavSet(false)}
            className="hoverBrandColor hoverFont500 hoverFontTop"
            {...props}
        >
            {props.children}
        </Link>
    )
}
