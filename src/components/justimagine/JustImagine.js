import React from 'react'
import JustImagineList from './JustImagineList'
import Dots from '../dots/Dots'

export default function JustImagine() {
    return (
        <div className='h100vh fcc'>
            <div className='w100p'>
                <div className='bg_gray'>
                    <div className='tac py30'>You've been navigating this journey independently for quite some time now</div>
                    <div className='title tac ttu pb30 green_d10'>Your moment to shine is waiting <Dots /></div>
                </div>
                <div className='bg_green p30'>
                    <div className='white title tac ttu pb15'>just imagine</div>
                    <JustImagineList />
                    <div className='white title2 tac py15'>Well, today is your lucky day</div>
                </div>
            </div>
        </div>
    )
}
