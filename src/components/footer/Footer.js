import React, { useContext } from 'react'
import FooterLink from './FooterLink'
import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'
import t from '../../hooks/useT'
import "./index.scss"
import { Context } from '../../Context'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {

    const mainRouteStyle = "poa b0 l0" // main page: fixed at the very bottom: other pages: respect other content
    const location = useLocation().pathname
    const { isVisibleMobileNav } = useContext(Context)

    return (
        <footer className={`por zi3 fcc jcsb pt pb px100 w100p ${location === MAIN_ROUTE ? mainRouteStyle : ""} ${isVisibleMobileNav ? "pof b0 l0" : ""} footer`}>
            <div>
                <div className='fw600 wsn'>{t("Career Coach & HR director")}</div>
                <div className='fw600 brand tac'>{t("Xiaoyang Li")}</div>
            </div>
            <FooterSocialLinks />
            <div className='f fwn jcsb w140'>
                <FooterLink text={t("Terms")} type="terms" />
                <div>/</div>
                <FooterLink text={t("Privacy")} type="privacy" />
            </div>
        </footer>
    )
}
