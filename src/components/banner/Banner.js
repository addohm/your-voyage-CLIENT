import React from 'react'
import img from "./img/img.png"
import "./index.scss"
import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'
import Arrow from './Arrow'
import LeftTitle from '../other/LeftTitle'
import t from '../../hooks/useT'

export default function Banner() {
    return (
        <div className='banner h100vh'>
            <div className='por banner__imgWrap'>
                <LeftTitle className="poa cx b10 banner__imgLeftTitle" text={t("Let's explore")} />
                <Animation
                //  type="blur"
                >
                    <img src={img} className='banner__img removedhoverMainImg' />
                </Animation>
            </div>
            <div className='f fwn aic banner__text pl30 removedhoverImgRotateY'>
                <Arrow className="mx30 banner__arrow transition15" />
                <div className='fc'>
                    <Animation
                    //  type="right"
                    >
                        <p className='banner__textp1'>
                            <TextSplit isColor={true} str={t("Let's embrace")} />
                        </p>
                    </Animation>
                    <Animation
                    //  type="right" delay={1}
                    >
                        <p className='banner__textp2'>
                            <TextSplit isColor={false} str={t("Feeling lost")} />
                        </p>
                    </Animation>
                </div>
            </div>
        </div>
    )
}
