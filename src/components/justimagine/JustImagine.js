import React from 'react'
import JustImagineList from './JustImagineList'
import Dots from '../dots/Dots'
import t from '../../hooks/useT'

export default function JustImagine() {
    return (
        <div className='h100vh fcc'>
            <div className='w100p'>
                <div className='bg_gray'>
                    <div className='tac py30'>{t("You've been navigating")}</div>
                    <div className='title tac ttu pb30 green_d10'>{t("Your moment")} <Dots /></div>
                </div>
                <div className='bg_green p30'>
                    <div className='white title tac ttu pb15'>{t("just imagine")}</div>
                    <JustImagineList />
                    <div className='white title2 tac py15'>{t("Well, today")}</div>
                </div>
            </div>
        </div>
    )
}
