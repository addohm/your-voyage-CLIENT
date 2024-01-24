import React from 'react'
import Markdown from '../textEditor/Markdown'
import "./index.scss"
import ToolCardIcons from '../tools/ToolCardIcons'
import PostFullLink from './PostFullLink'

export default function PostFull({ post, type, id, value, title, link, isVisibleIcons = true }) {
    return (
        <>
            <div className='postFull maw800 mla mra mb100 px15'>
                <ToolCardIcons isVisible={isVisibleIcons} type={type} _id={id} className="" />
                <div className='title tac mb'>{post?.title || title}</div>
                <Markdown>{value}</Markdown>
                <PostFullLink link={post?.link || link} />
            </div>
        </>
    )
}
