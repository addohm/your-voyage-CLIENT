import { MESSAGES_ROUTE, SUPPORTS_ROUTE } from "../../utils/consts"
import Link2 from "./Link2"
import UserImgWithNotReadNum from "./UserImgWithNotReadNum"

export default function UserImgWithNotReadNumWithLinkToRooms({ name, img, imgClassName, notReadNum, numClassName, notReadNumSupport, numSupportClassName }) {

    const linkDependingOnWhereMoreMessages = notReadNum >= notReadNumSupport ? MESSAGES_ROUTE : SUPPORTS_ROUTE

    return (
        <Link2 to={linkDependingOnWhereMoreMessages}>
            <UserImgWithNotReadNum
                name={name}
                img={img}
                imgClassName={imgClassName}
                notReadNum={notReadNum}
                numClassName={numClassName}
                notReadNumSupport={notReadNumSupport}
                numSupportClassName={numSupportClassName}
            />
        </Link2>
    )
}
