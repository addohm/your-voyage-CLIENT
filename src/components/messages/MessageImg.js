import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function MessageImg({ img, name }) {
    return (
        img
            ?
            <img src={img} className="w40 h40 brL" />
            :
            <GenUserImgDepOnFirstChar name={name} />
    )
}
