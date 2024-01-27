import React from 'react'
import Markdown from '../textEditor/Markdown'
import "./index.scss"
import ToolCardIcons from '../tools/ToolCardIcons'
import PostFullLink from './PostFullLink'
import TimeToReadText from '../other/TimeToReadText'
import PostFullDate from './PostFullDate'

export default function PostFull({ type, id, value, title, link, isVisibleIcons = true, updatedAt }) {
    return (
        <>
            <div className='postFull maw800 mla mra mb100 px15'>
                <div className="f jcsb aic mb">
                    <ToolCardIcons isVisible={isVisibleIcons} type={type} _id={id} className="" />
                    <PostFullDate isVisible={isVisibleIcons} updatedAt={updatedAt} />
                    <TimeToReadText value={value} />
                </div>
                <div className='title tac mb'>{title}</div>
                <Markdown>{value}</Markdown>
                <PostFullLink link={link} />
            </div>
        </>
    )
}
