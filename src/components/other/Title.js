import React from 'react'
import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'

export default function Title({ title, isExpHovered, className, lineClassName }) {
    return (
        <div className={`f aic jcfs g15 fwn mb15 ${isExpHovered ? "expTitleActive" : "expTitleNotActive"} ${className}`}>
            <Animation type="left">
                <div className="title"><TextSplit str={title} /></div>
            </Animation>
            {/* line */}
            <Animation type="rotateY">
                <div className={`w160 h3 bg_black ${lineClassName}`}></div>
            </Animation>
        </div>
    )
}
