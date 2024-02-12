import { useState } from "react"
import LogoutButton from "./LogoutButton"
import { KeyboardArrowDown as Arrow } from '@mui/icons-material';
import AdminAddContent from "../admin/AdminAddContent";
import Menu from "./Menu";
import UserContent from "../user/UserContent";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";
import useWindowSize from "../../hooks/useWindowSize";
import UserImgWithNotReadNumWithLinkToRooms from "../other/UserImgWithNotReadNumWithLinkToRooms";

export default function LoginDisplayEmail({ user, totalNotReadNum, totalNotReadNumSupport }) {

    const [isUserEmailHovered, isUserEmailHoveredSet] = useState(false)
    const { isMobile } = useWindowSize()

    function onClick(e) {
        isUserEmailHoveredSet(prev => !prev)
    }

    function onMouseEnter() {
        if (isMobile) return
        isUserEmailHoveredSet(true)
    }

    function onMouseLeave() {
        isUserEmailHoveredSet(false)
    }

    return (
        user &&
        <>
            {/* <div className="title tal">Email:</div> */}
            <div
                className="por tar curPointer"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <div className="poa cx gray fz14">{user?.role !== "user" && user?.role}</div>
                <div className="fcc g5 w200">
                    <UserImgWithNotReadNumWithLinkToRooms
                        name={user?.name}
                        img={user?.img}
                        imgClassName="w40 h40"
                        notReadNum={totalNotReadNum}
                        numClassName="w20 h20 l-4 t-2 fz13 zi2"
                        notReadNumSupport={totalNotReadNumSupport}
                        numSupportClassName="w20 h20 l24 t-2 fz13 zi2"
                    />
                    <div className="maw125 oh wsn toe">{user?.email?.replace(/@.*/, '')}</div>
                    <Arrow className={`${isUserEmailHovered ? "tr180" : ""}`} />
                </div>
                <Menu isVisible={user && isUserEmailHovered} className="poa w100p bg_white zi3 py15 brL bsh blurAnim">
                    <UserContent />
                    <AdminAddContent />
                    <LogoutButton />
                </Menu>
            </div>
        </>
    )
}
