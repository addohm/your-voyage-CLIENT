import React, { useState } from 'react'
import Arrow from './Arrow'
import { Button } from '@mui/material'
import img from './img/img2.png'
import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'
import goToCoach from '../../utils/goToCoach'

export default function Banner2() {

  const [isContentHovered, isContentHoveredSet] = useState(false)

  return (
    <div className="fcc h100vh about">
      <Arrow className={`mx30 banner__arrow tr180 ${isContentHovered ? "op0 transition15" : "op1 transition15"}`} />
      <div className='maw465 mr30' onMouseEnter={() => isContentHoveredSet(true)} onMouseLeave={() => isContentHoveredSet(false)}>
        <Animation type="left">
          <div className='fz31 mb10'>
            <TextSplit str="Nice to meet you!" />
          </div>
        </Animation>
        <Animation type="left" delay={1}>
          <div className='fz34 fw600 brand mb15'>
            <TextSplit str="I'm Xiaoyang Li." />
          </div>
        </Animation>
        <Animation type="left" delay={2}>
          <div className='fz26 mb30'>
            <TextSplit isColor={true} str="I'm a director, marketer, and sales professional + career coach, here to champion and unleash you." />
          </div>
        </Animation>
        <Animation type="left" delay={3}>
          <div className='fz16 mb30'>
            <TextSplit str="I help individuals pursue unconventional career paths and daring aspirations they've been considering. But often, hesitation prevents them from taking the next step. With my coaching program, I assist clients in articulating their experiences, overcoming self-doubt, and transitioning to fulfilling creative endeavors. This shift aligns their opportunities with their desired lifestyle and aspirations. By empowering individuals to embrace their unique talents, they gain the confidence to take on new challenges and succeed in uncharted professional territories." />
          </div>
        </Animation>
        <Button className='w70p' variant='contained' onClick={goToCoach}>APPLY FOR 1:1 COACHING</Button>
      </div>
      <Animation type="opacity">
        <img className='hoverMainImg2' src={img} />
      </Animation>
    </div>
  )
}
