import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function RoomMsgImg({ isVisible, msgImg, img, name }) {

    if (!isVisible) return

    return (
        (msgImg || img) ?
            <img className="w40 h40 brL" src={msgImg || img} />
            :
            <GenUserImgDepOnFirstChar name={name} />
    )
}
