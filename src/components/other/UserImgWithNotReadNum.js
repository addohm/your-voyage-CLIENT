import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar"
import NotReadNum from "./NotReadNum"

export default function UserImgWithNotReadNum({ name, img, imgClassName, notReadNum, numClassName, notReadNumSupport, numSupportClassName }) {
    return (
        <div className="por">
            <NotReadNum notReadNum={notReadNum} numClassName={numClassName} />
            <NotReadNum notReadNum={notReadNumSupport} numClassName={numSupportClassName} />
            {img
                ?
                <img className={`br50 ${imgClassName}`} src={img} />
                :
                <GenUserImgDepOnFirstChar name={name} className={imgClassName} />
            }
        </div>
    )
}
