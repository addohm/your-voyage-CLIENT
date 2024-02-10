import GenUserImgDepOnFirstChar from "../user/GenUserImgDepOnFirstChar";

export default function RoomSmallImg({ isVisible, senderImg, name, senderName }) {

    if (!isVisible) return

    return (
        (senderImg) ?
            // if user logged in via google, img from google profile used
            <img className="w40 h40 brL" src={senderImg} />
            :
            // if user logged in via LoginSendEmail, user has no img => gen img from name
            <GenUserImgDepOnFirstChar name={senderName || name} />
    )
}
