import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function RoomMsgImg({ isVisible, msgImg, name }) {

    if (!isVisible) return

    return (
        msgImg ?
            <img className="w40 h40 brL" src={msgImg} />
            :
            <GenUserImgDepOnFirstChar name={name} />
    )
}
