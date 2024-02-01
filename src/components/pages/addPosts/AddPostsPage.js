import React, { useContext, useState } from 'react'
import AddPost from './AddPost'
import AddPostTypes from './AddPostTypes'
import { Context } from '../../../Context'

export default function AddPostsPage({ postTypes, title }) {

    const [stateType, stateTypeSet] = useState(postTypes?.[0])
    const { lang } = useContext(Context)

    return (
        <>
            <div className="title w100p tac mb30">Add Posts ({lang.toUpperCase()})</div>
            <div className='title tac mt'>{title}</div>
            <AddPostTypes postTypes={postTypes} stateType={stateType} stateTypeSet={stateTypeSet} />
            <AddPost _type={stateType} />
        </>
    )
}
