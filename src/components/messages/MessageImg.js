import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function MessageImg({ img, name }) {

    const className = "w40 h40 brL bsh05 appearFromRight"

    return (
        img
            ?
            <img src={img} className={className} />
            :
            <GenUserImgDepOnFirstChar name={name} className={className} />
    )
}
