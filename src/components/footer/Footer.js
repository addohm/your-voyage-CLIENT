import React from 'react'
import instagram from "./img/instagram.svg"
import linkedin from "./img/linkedin.svg"
import youtube from "./img/youtube.svg"
import FooterLink from './FooterLink'
import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'

export default function Footer() {

    const mainRouteStyle = "poa b0 l0" // main page: fixed at the very bottom: other pages: respect other content
    const location = useLocation().pathname

    return (
        <footer className={`fcc jcsb pb px100 w100p ${location === MAIN_ROUTE ? mainRouteStyle : ""}`}>
            <div>
                <div className='fw600'>Career Coach & hr director</div>
                <div className='fw600 brand tac'>Xiaoyang Li</div>
            </div>
            <div className='f jcsb w100'>
                <img src={instagram} />
                <img src={linkedin} />
                <img src={youtube} />
            </div>
            <div className='f fwn jcsb w140'>
                <FooterLink text="Terms" type="terms" />
                <div>/</div>
                <FooterLink text="Privacy" type="privacy" />
            </div>
        </footer>
    )
}
