import { useState } from "react"
import LogoutButton from "./LogoutButton"
import { KeyboardArrowDown as Arrow } from '@mui/icons-material';
import AdminAddContent from "../admin/AdminAddContent";
import Menu from "./Menu";
import UserContent from "../user/UserContent";

export default function LoginDisplayEmail({ user }) {

    const [isUserEmailHovered, isUserEmailHoveredSet] = useState(false)

    return (
        user &&
        <>
            {/* <div className="title tal">Email:</div> */}
            <div
                className="por tar"
                onMouseEnter={() => isUserEmailHoveredSet(true)}
                onMouseLeave={() => isUserEmailHoveredSet(false)}
            >
                <div className="f g5 aic maw200">
                    <img src={user?.img} className="w30 h30 br50" />
                    <div className="oh wsn toe">{user?.email?.replace(/@.*/, '')}</div>
                <Arrow className={`${isUserEmailHovered ? "tr180" : ""}`} />
                </div>
                <Menu isVisible={user && isUserEmailHovered} className="poa w100p bg_white py15 brL">
                    <AdminAddContent />
                    <UserContent />
                    <LogoutButton />
                </Menu>
            </div>
        </>
    )
}
