import React from 'react'
import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'
import "./index.scss"
import FooterSocialLinks from './FooterSocialLinks'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'

export default function Footer() {

    const mainRouteStyle = "poa b0 l0" // main page: fixed at the very bottom: other pages: respect other content
    const location = useLocation().pathname

    return (
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
