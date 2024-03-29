import HeaderNav from "./HeaderNav";

export default function HeaderNavMobile({ isVisibleMobileNav, isMobile, isVisibleMobileNavSet }) {
    return (
        (isMobile && isVisibleMobileNav) &&
        <div className="h100vh w100vw">
            <div className="pof bg_white zi2 ml-15 w100p">
                <HeaderNav
                    className="fcr"
                    isVisible={isMobile && isVisibleMobileNav}
                    isVisibleMobileNavSet={isVisibleMobileNavSet}
                    isMobile={isMobile}
                />
            </div>
        </div>
    )
}
