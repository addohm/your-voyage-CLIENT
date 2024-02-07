import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function RoomSmallImg({ isVisible, msgImg, img, name, senderName }) {

    if (!isVisible) return

    return (
        (msgImg || img) ?
            // if user logged in via google, img from google profile used
            <img className="w40 h40 brL" src={msgImg || img} />
            :
            // if user logged in via LoginSendEmail, user has no img => gen img from name
            <GenUserImgDepOnFirstChar name={senderName || name} />
    )
}
