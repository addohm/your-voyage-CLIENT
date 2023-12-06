import React from 'react'
import img from "./img/img.png"
import "./index.scss"
import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'
import Arrow from './Arrow'
import LeftTitle from '../other/LeftTitle'

export default function Banner() {
    return (
        <div className='banner h100vh'>
            <div className='banner__imgWrap'>
                <LeftTitle className="poa l-210 b10" text="Let's explore a fresh perspective" />
                <Animation type="blur">
                    <img src={img} className='banner__img hoverMainImg' />
                </Animation>
            </div>
            <div className='f fwn aic banner__text pl30 hoverImgRotateY'>
                <Arrow className="mx30 banner__arrow transition15" />
                <div className='fc'>
                    <Animation type="right">
                        <p className='font2 banner__textp1'>
                            <TextSplit isColor={true} str="Let's embrace courage, creativity, and assurance in our pursuits." />
                        </p>
                    </Animation>
                    <Animation type="right" delay={1}>
                        <p className='font2 banner__textp2'>
                            <TextSplit isColor={false} str="Feeling lost or left behind in your social circle? Gain valuable career insights from an esteemed HR director. Find your ideal job and prioritize happiness and true passion. Unlock the secrets to professional success and personal fulfillment as you embark on a journey towards self-discovery and meaningful connections. Your path to a rewarding career starts here." />
                        </p>
                    </Animation>
                </div>
            </div>
        </div>
    )
}
