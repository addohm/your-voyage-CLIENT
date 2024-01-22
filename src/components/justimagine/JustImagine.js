import React from 'react'
import JustImagineList from './JustImagineList'
import Dots from '../dots/Dots'
import t from '../../hooks/useT'
import './index.scss'

export default function JustImagine() {
    return (
        <div className='h100vh fcc justImagine'>
            <div className='w100p'>
                <div className='bg_white zi1 p15'>
                    <div className='tac py30 ls3'>{t("You've been navigating")}</div>
                    <div className='title tac ttu pb30 redDiamond'>{t("Your moment")} <Dots className="redDiamond" /></div>
                </div>
                <div className='bg_white zi2 p30'>
                    <div className='title tac ttu pb15 ls1'>{t("just imagine")}</div>
                    <JustImagineList />
                    <div className='title2 tac py15 ls1'>{t("Well, today")}</div>
                </div>
            </div>
        </div>
    )
}
