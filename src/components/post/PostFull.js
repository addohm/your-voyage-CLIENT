import React from 'react'
import { useParams } from 'react-router-dom'
import usePostFull from './usePostFull'
import Markdown from '../textEditor/Markdown'
import "./index.scss"
import ToolCardIcons from '../tools/ToolCardIcons'
import PostFullLink from './PostFullLink'

export default function PostFull() {

    const { id, type } = useParams()
    const { post } = usePostFull(type, id)

    return (
        <>
            <div className='postFull maw800 mla mra mb100'>
                <ToolCardIcons isVisible={true} type={type} _id={id} className="poa t-30" />
                <div className='title tac mb'>{post?.title}</div>
                <Markdown>{post?.textEditorValue}</Markdown>
                <PostFullLink link={post?.link} />
            </div>
        </>
    )
}
