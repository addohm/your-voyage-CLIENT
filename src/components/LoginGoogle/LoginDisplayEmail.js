import { useState } from "react"
import LogoutButton from "./LogoutButton"
import { KeyboardArrowDown as Arrow } from '@mui/icons-material';
import AdminAddContent from "../admin/AdminAddContent";
import Menu from "./Menu";
import UserContent from "../user/UserContent";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";

export default function LoginDisplayEmail({ user, totalNotReadNum }) {

    const [isUserEmailHovered, isUserEmailHoveredSet] = useState(false)

    return (
        user &&
        <>
            {/* <div className="title tal">Email:</div> */}
            <div
                className="por tar"
                onMouseEnter={() => isUserEmailHoveredSet(true)}
                onMouseLeave={() => isUserEmailHoveredSet(false)}
                onClick={() => isUserEmailHoveredSet(prev => !prev)}
            >
                <div className="f g5 aic maw200">
                    <UserImgWithNotReadNum img={user?.img} notReadNum={totalNotReadNum} imgClassName="w40 h40" numClassName="w20 h20 l-4 t-2 fz13" />
                    <div className="oh wsn toe">{user?.email?.replace(/@.*/, '')}</div>
                    <Arrow className={`${isUserEmailHovered ? "tr180" : ""}`} />
                </div>
                <Menu isVisible={user && isUserEmailHovered} className="poa w100p bg_white zi3 py15 brL bsh">
                    <UserContent />
                    <AdminAddContent />
                    <LogoutButton />
                </Menu>
            </div>
        </>
    )
}
