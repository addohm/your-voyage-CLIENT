import React, { useContext } from 'react'
import CoachCardRating from './CoachCardRating'
import t from "../../hooks/useT";
import { Context } from '../../Context';

export default function CoachCardRatings({ rating, isReadOnly = false }) {

    const { applierForm } = useContext(Context)

    return (
        <div className='p15'>
            {rating.map(({ name, rating }) => {

                let memoRating
                if (applierForm) {
                    memoRating = Object.keys(applierForm).map((keyName, ind) => keyName === name && Object.values(applierForm)[ind]).filter(leaveOnlyTrue => leaveOnlyTrue) * 1
                }

                return (
                    <div className='f fwn w100p g10 ttu mb10'>
                        <div className='w50p tar coachCardRatingTitle'>{t(name)}</div>
                        <CoachCardRating name={name} rating={isReadOnly ? rating : memoRating || rating} isReadOnly={isReadOnly} />
                    </div>
                )
            })}
        </div>
    )
}
