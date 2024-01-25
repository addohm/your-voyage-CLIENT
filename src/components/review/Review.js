import React, { useState } from 'react'
import ReviewImg from './ReviewImg';
import ReviewArrow from './ReviewArrow';
import PrintingText from '../animation/PrintingText';
import ReviewType from './ReviewType';
import t from '../../hooks/useT';

export default function Review({ list }) {

    const [postNum, postNumSet] = useState(0)
    const { type, name, text } = list[postNum]

    return (
        <div className='por maw800 mih256 pb30 bg_white zi2 brL pl50 pr50 m15'>
            <div className='f fwn aic'>
                <ReviewArrow isVisible={list.length > 1} className='mx15 poa t110 l0' onClick={() => postNum === 0 ? postNumSet(list.length - 1) : postNumSet(prev => prev - 1)} />
                <div className='fcc'>
                    {list.map((item, ind) => {
                        if (postNum !== ind) return
                        return (
                            <div className='por maw700'>
                                <ReviewType type={t(type)} />
                                <ReviewImg img={item.img} />
                                <div className='fz20 fw600 ls3 w100p tac por b30 removedblurAnim'>{t(name)}</div>
                                <PrintingText text={t(text)} />
                            </div>
                        )
                    })}
                </div>
                <ReviewArrow isVisible={list.length > 1} className='tr180 mx15 poa t110 r0' onClick={() => postNum === list.length - 1 ? postNumSet(0) : postNumSet(prev => prev + 1)} />
            </div>
        </div>
    )
}
