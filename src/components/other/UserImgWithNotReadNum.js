import useGenUserImgDepOnFirstChar from "../../hooks/useGenUserImgDepOnFirstChar"

export default function UserImgWithNotReadNum({ img, notReadNum, imgClassName, numClassName }) {

    const userImg = useGenUserImgDepOnFirstChar()

    return (
        <div className="por">
            {notReadNum > 0 && <div className={`poa l4 t0 fcc bg_brand white br50 ${numClassName}`}>{notReadNum}</div>}
            {img
                ?
                <img className={`br50 ${imgClassName}`} src={img} />
                :
                userImg
            }
        </div>
    )
}
