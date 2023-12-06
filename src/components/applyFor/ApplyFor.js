import React from 'react'
import Quote from '../quote/Quote'
import dummy from "./img/dummy.png"
import coach from "./img/coach.png"
import { Button } from "@mui/material"
import Dots from '../dots/Dots'

export default function ApplyFor() {
    return (
        <div className='h100vh fcc'>
            <div>
                <div className='f maw820 m0a'>
                    <div className='mb75'>
                        <div className='fz25 ttu ls3 mb10 tac'>Apply for...</div>
                        <div className='title tac mb10'>1:1 Career Coaching</div>
                        <Quote className="por r200" title="with Xiaoyang Li" titleClassName="brand" />
                    </div>
                    <div className='fcc mb20'>
                        <img src={dummy} />
                        <div className='bg_gray p30 ml15 brL maw700'>Hi! I'm currently facing a roadblock and lacking motivation in my job hunt and career exploration :(</div>
                    </div>
                    <div className='fcc'>
                        <img src={coach} />
                        <div className='ml20 maw700'><span className='fw700'>Xiaoyang Li </span>is typing <Dots /></div>
                    </div>
                    <div className='tac mt75 mb45'>Career exploration with VIP treatment? I'm in! Are you ready to re-ignite curiosity, take charge, and gain the clarity you need to start again?</div>
                </div>
                <Button variant='contained'>APPLY Now!</Button>
            </div>
        </div>
    )
}
