import React from 'react'
import instagram from "./img/instagram.svg"
import linkedin from "./img/linkedin.svg"
import youtube from "./img/youtube.svg"
import FooterLink from './FooterLink'

export default function Footer() {
    return (
        <div className='fcc jcsb pb px100 w100p poa b0 l0'>
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
        </div>
    )
}
