import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar"

export default function UserImgWithNotReadNum({ img, name, notReadNum, imgClassName, numClassName }) {
    return (
        <div className="por">
            {notReadNum > 0 && <div className={`poa l4 t0 fcc bg_brand white br50 ${numClassName}`}>{notReadNum}</div>}
            {img
                ?
                <img className={`br50 ${imgClassName}`} src={img} />
                :
                <GenUserImgDepOnFirstChar name={name} className={imgClassName} />
            }
        </div>
    )
}
