import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function RoomSmallImg({ isVisible, msgImg, name, senderName }) {

    if (!isVisible) return

    return (
        (msgImg) ?
            // if user logged in via google, img from google profile used
            <img className="w40 h40 brL" src={msgImg} />
            :
            // if user logged in via LoginSendEmail, user has no img => gen img from name
            <GenUserImgDepOnFirstChar name={senderName || name} />
    )
}
