import { useState } from "react"
import LogoutButton from "./LogoutButton"
import { KeyboardArrowDown as Arrow } from '@mui/icons-material';
import AdminAddContent from "../admin/AdminAddContent";
import LoginDisplayEmailHoveredWrap from "./LoginDisplayEmailHoveredWrap";
import UserContent from "../user/UserContent";

export default function LoginDisplayEmail({ user }) {

    const [isUserEmailHovered, isUserEmailHoveredSet] = useState(false)

    return (
        user &&
        <>
            {/* <div className="title tal">Email:</div> */}
            <div
                className="por w150 tar"
                onMouseEnter={() => isUserEmailHoveredSet(true)}
                onMouseLeave={() => isUserEmailHoveredSet(false)}
            >
                <div className="oh wsn toe w110">{user?.email?.replace(/@.*/, '')}</div>
                <Arrow className={`poa r8 t-2 ${isUserEmailHovered ? "tr180" : ""}`} />
                <LoginDisplayEmailHoveredWrap user={user} isUserEmailHovered={isUserEmailHovered}>
                    <AdminAddContent />
                    <UserContent />
                    <LogoutButton />
                </LoginDisplayEmailHoveredWrap>
            </div>
        </>
    )
}
