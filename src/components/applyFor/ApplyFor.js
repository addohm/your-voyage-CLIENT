import React from 'react'
import Quote from '../quote/Quote'
import dummy from "./img/dummy.png"
import coach from "./img/coach.png"
import { Button } from "@mui/material"
import Dots from '../dots/Dots'
import goToCoach from '../../utils/goToCoach'
import t from '../../hooks/useT'

export default function ApplyFor() {
    return (
        <div className='h100vh fcc'>
            <div>
                <div className='f maw820 m0a'>
                    <div className='mb75'>
                        <div className='fz25 ttu ls3 mb10 tac'>{t("Apply for")}...</div>
                        <div className='title tac mb10'>{t("1:1 Career Coaching")}</div>
                        <Quote className="por r200" title={t("with Xiaoyang Li")} titleClassName="brand" />
                    </div>
                    <div className='fcc mb20'>
                        <img src={dummy} />
                        <div className='bg_gray p30 ml15 brL maw700'>{t("Hi! I'm currently facing a roadblock")} :(</div>
                    </div>
                    <div className='fcc'>
                        <img src={coach} />
                        <div className='ml20 maw700'>
                            <span className='fw700'>{t("Xiaoyang Li")} </span>
                            <span className="fz13">{t("is typing")}</span> <Dots />
                        </div>
                    </div>
                    <div className='tac mt75 mb45'>{t("Career exploration with VIP")}</div>
                </div>
                <Button variant='contained' onClick={goToCoach}>{t("apply now")}!</Button>
            </div>
        </div>
    )
}
