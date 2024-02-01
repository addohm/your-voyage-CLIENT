import React from 'react'
import FooterLink from './FooterLink'
import { useLocation } from 'react-router-dom'
import { FAQ_ROUTE, MAIN_ROUTE, NEWSLETTER_ROUTE } from '../../utils/consts'
import t from '../../hooks/useT'
import "./index.scss"
import FooterSocialLinks from './FooterSocialLinks'
import Link2 from '../other/Link2'

export default function Footer() {

    const mainRouteStyle = "poa b0 l0" // main page: fixed at the very bottom: other pages: respect other content
    const location = useLocation().pathname

    return (
        <footer className={`por fcc fwn jcsb pt pb px100 w100p ${location === MAIN_ROUTE ? mainRouteStyle : ""} footer`}>
            {/* LEFT */}
            <div className='fcc w100p'>
                <div className='wfc'>
                    <div className='fw600 wsn'>{t("Career Coach & HR director")}</div>
                    <div className='fw600 brand tac'>{t("Xiaoyang Li")}</div>
                </div>
            </div>
            {/* CENTER */}
            <FooterSocialLinks />
            {/* RIGHT */}
            <div className='fcc w100p'>
                <div className='f fwn jcsb'>
                    <FooterLink text={t("Terms")} type="terms" />
                    <div className="mx15">/</div>
                    <FooterLink text={t("Privacy")} type="privacy" />
                    <div className="mx15">/</div>
                    <Link2 to={NEWSLETTER_ROUTE}>{t("Newsletter")}</Link2>
                    <div className="mx15">/</div>
                    <Link2 to={FAQ_ROUTE}>{t("FAQ")}</Link2>
                </div>
            </div>
        </footer>
    )
}
