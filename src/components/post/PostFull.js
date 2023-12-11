import React from 'react'
import { useParams } from 'react-router-dom'
import usePostFull from './usePostFull'
import Markdown from '../textEditor/Markdown'
import "./index.scss"

export default function PostFull() {

    const { id, type } = useParams()
    const { post } = usePostFull(type, id)

    return (
        <div className='postFull maw800 m0a br'>
            <div>{post?.title}</div>
            <Markdown>{post?.textEditorValue}</Markdown>
        </div>
    )
}
