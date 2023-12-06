import React from 'react'
import Review from './Review'
import { recommendation, review } from './list'

export default function Reviews() {
    return (
        <div className='fcc mt200'>
            <div className='f g100 wfc m0a'>
                <Review list={recommendation} />
                <Review list={review} />
            </div>
        </div>
    )
}
