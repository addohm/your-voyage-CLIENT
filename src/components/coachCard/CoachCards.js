import React from 'react'
import CoachCard from './CoachCard'
import { info } from "./list.js"
import CoachCardApplier from './CoachCardApplier.js'
import "./index.scss"

export default function CoachCards() {
    return (
        <div className='fcc maw925 m0a coaching'>
            <div className='w100p'>
                {info.map((item, ind) => {

                    const isCoach = ind === 0

                    return (
                        <CoachCard key={ind} {...item} ind={ind} className={`${isCoach ? "coach" : "applier"}`} isCoach={isCoach}>
                            {!isCoach && <CoachCardApplier />}
                        </CoachCard>
                    )
                })}
            </div>
        </div>
    )
}
