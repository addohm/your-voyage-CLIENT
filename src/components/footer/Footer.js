import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'
import "./index.scss"
import FooterSocialLinks from './FooterSocialLinks'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'
import { Context } from '../../Context'

export default function Footer() {

    // main page: fixed at the very bottom: other pages: respect other content
    const mainRouteStyle = "poa b0 l0"
    const location = useLocation().pathname
    // not visible in /support/ & /message/ routes.
    const isVisibleForLocations = !location.includes("/support/") && !location.includes("/message/")
    const { isVisibleMobileNav } = useContext(Context)

    return (
        isVisibleForLocations && !isVisibleMobileNav &&
        <footer className={`por fcc fwn jcsb mt100 pt pb px100 w100p ${location === MAIN_ROUTE ? mainRouteStyle : ""} footer`}>
            {/* LEFT */}
            <FooterLogo />
            {/* CENTER */}
            <FooterSocialLinks />
            {/* RIGHT */}
            <FooterLinks />
        </footer>
    )
}
