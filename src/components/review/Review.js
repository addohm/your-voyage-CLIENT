import React, { useState } from 'react'
import ReviewImg from './ReviewImg';
import ReviewArrow from './ReviewArrow';
import PrintingText from '../animation/PrintingText';
import ReviewType from './ReviewType';

export default function Review({ list }) {

    const [postNum, postNumSet] = useState(0)
    const { type, name, text } = list[postNum]

    return (
        <div className='por maw800 mih256 pb30 bg_white brL pl50 pr50'>
            <div className='f fwn aic'>
                <ReviewArrow className='mx15 poa t110 l0' onClick={() => postNum === 0 ? postNumSet(list.length - 1) : postNumSet(prev => prev - 1)} />
                <div className='fcc'>
                    {list.map((item, ind) => {
                        if (postNum !== ind) return
                        return (
                            <div className='por w700'>
                                <ReviewType type={type} />
                                <ReviewImg img={item.img} />
                                <div className='fz20 fw600 ls3 w100p tac por b30 blurAnim'>{name}</div>
                                <PrintingText text={text} />
                            </div>
                        )
                    })}
                </div>
                <ReviewArrow className='tr180 mx15 poa t110 r0' onClick={() => postNum === list.length - 1 ? postNumSet(0) : postNumSet(prev => prev + 1)} />
            </div>
        </div>
    )
}
