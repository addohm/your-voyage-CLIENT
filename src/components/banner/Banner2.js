import React, { useState } from 'react'
import Arrow from './Arrow'
import { Button } from '@mui/material'
import img from './img/img2.png'
import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'
import useGoToCoach from '../../hooks/useGoToCoach'
import t from '../../hooks/useT'

export default function Banner2() {

  const [isContentHovered, isContentHoveredSet] = useState(false)
  const { goToCoach } = useGoToCoach()

  return (
    <div className="fcc h100vh about banner2">
      <Arrow className={`mx30 banner__arrow tr180 ${isContentHovered ? "op0 transition15" : "op1 transition15"}`} />
      <div className='maw465 mr30 banner2AllText' onMouseEnter={() => isContentHoveredSet(true)} onMouseLeave={() => isContentHoveredSet(false)}>
        <Animation
          type="left"
        >
          <div className='fz31 mb10'>
            <TextSplit str={t("Nice to meet")} />
          </div>
        </Animation>
        <Animation
          type="left" delay={1}
        >
          <div className='fz34 fw600 brand mb15'>
            <TextSplit str={t("I'm") + t("Xiaoyang Li")} />
          </div>
        </Animation>
        <Animation
          type="left" delay={1.2}
        >
          <div className='fz26 mb30'>
            <TextSplit isColor={true} str={t("I'm a director")} />
          </div>
        </Animation>
        <Animation
          type="left" delay={1.4}
        >
          <div className='fz16 mb30'>
            <TextSplit str={t("I help individuals")} />
          </div>
        </Animation>
        <Button className='w70p' variant='contained' onClick={goToCoach}>{t("Apply for")}{t("1:1 Career Coaching")}</Button>
      </div>
      <Animation
        type="opacity"
        className="banner2MainImg"
      >
        <img className='removedhoverMainImg2' src={img} />
      </Animation>
    </div>
  )
}
