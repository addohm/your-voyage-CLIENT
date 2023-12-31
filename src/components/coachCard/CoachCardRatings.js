import React from 'react'
import CoachCardRating from './CoachCardRating'

export default function CoachCardRatings({ rating, isReadOnly = false }) {
    return (
        <div className='p15'>
            {rating.map(({ name, rating }) => (
                <div className='f fwn w100p g10 ttu mb10'>
                    <div className='w50p tar'>{name}</div>
                    <CoachCardRating name={name} rating={rating} isReadOnly={isReadOnly} />
                </div>
            ))}
        </div>
    )
}
