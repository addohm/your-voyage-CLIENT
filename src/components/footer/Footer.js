import React from 'react'
import instagram from "./img/instagram.svg"
import linkedin from "./img/linkedin.svg"
import youtube from "./img/youtube.svg"

export default function Footer() {
    return (
        <div className='fcc jcsb p15 w100p poa b0 l0'>
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
                <div>Terms</div>
                <div>/</div>
                <div>Privacy</div>
            </div>
        </div>
    )
}