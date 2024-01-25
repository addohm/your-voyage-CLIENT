import React, { useState } from 'react'
import AddPost from './AddPost'
import AddPostTypes from './AddPostTypes'

export default function AddPostsPage({ postTypes, title }) {

    const [stateType, stateTypeSet] = useState(postTypes?.[0])

    return (
        <>
            <div className="title w100p tac mb30">Add Post</div>
            <div className='title tac mt'>{title}</div>
            <AddPostTypes postTypes={postTypes} stateType={stateType} stateTypeSet={stateTypeSet} />
            <AddPost _type={stateType} />
        </>
    )
}
