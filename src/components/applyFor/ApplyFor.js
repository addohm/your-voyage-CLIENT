import React from 'react'
import Quote from '../quote/Quote'
import coach from "./img/coach.png"
import { Button } from "@mui/material"
import Dots from '../dots/Dots'
import useGoToCoach from '../../hooks/useGoToCoach'
import t from '../../hooks/useT'
import './index.scss'

export default function ApplyFor() {

    const { goToCoach } = useGoToCoach()

    return (
        <div className='h100vh fcc applyFor'>
            <div>
                <div className='f maw820 m0a p15'>
                    <div className='pb75 m0a'>
                        <div className='fz25 ttu ls3 mb10 tac'>{t("Apply for")}...</div>
                        <div className='title tac mb10'>{t("1:1 Career Coaching")}</div>
                        <Quote className="por wsn" title={t("with Xiaoyang Li")} titleClassName="applyForQuote" />
                    </div>
                    <div className='f fwn aifs mb20'>
                        <div>
                            <div className='fcc bg_gray br50 w100 h100 fz50'>U</div>
                        </div>
                        <div className='bg_gray p30 ml15 brL'>{t("Hi! I'm currently facing a roadblock")} :(</div>
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
