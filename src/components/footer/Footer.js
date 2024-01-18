import React from 'react'
import FooterLink from './FooterLink'
import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'
import t from '../../hooks/useT'
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Footer() {

    const mainRouteStyle = "poa b0 l0" // main page: fixed at the very bottom: other pages: respect other content
    const location = useLocation().pathname

    return (
        <footer className={`fcc jcsb pb px100 w100p ${location === MAIN_ROUTE ? mainRouteStyle : ""}`}>
            <div>
                <div className='fw600'>{t("Career Coach & HR director")}</div>
                <div className='fw600 brand tac'>{t("Xiaoyang Li")}</div>
            </div>
            <div className='f jcsb w100'>
                <Instagram />
                <YouTube />
                <LinkedIn />
            </div>
            <div className='f fwn jcsb w140'>
                <FooterLink text={t("Terms")} type="terms" />
                <div>/</div>
                <FooterLink text={t("Privacy")} type="privacy" />
            </div>
        </footer>
    )
}
