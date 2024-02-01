import genFirstCharColor from "../../utils/genFirstCharColor"

export default function GenUserImgDepOnFirstChar({ name, className }) {

    const color = genFirstCharColor(name)

    return (
        <div
            style={{ background: color }}
            className={`fcc w40 h40 br50 white ${className || ""}`}
        >
            {/* to control font size of these 2 chars, pass eg: fz20 to UserImgWithNotReadNum imgClassName  */}
            <div style={{ fontSize: "1.25em" }}>{name?.charAt(0).toUpperCase()}{name?.charAt(1)}</div>
        </div>
    )
}
