import React, { useEffect, useRef, useState } from 'react'
import Animation from '../animation/Animation'

export default function FullWidthImg({ img }) {

    // // TODO: leave this or do static img?
    // const [imgWidth, imgWidthSet] = useState(0)
    // const ref = useRef(null)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // TODO has dup
    //         // when you scroll after img top
    //         if (window.scrollY >= ref.current.offsetTop + 3000) {
    //             // add +`10`px to image width
    //             imgWidthSet(prev => prev + 1)
    //         } else {
    //             // !
    //             imgWidthSet(0)
    //         }

    //         if (window.scrollY >= ref.current.offsetTop + 5000) {
    //             // !
    //             imgWidthSet(0)
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // // ! opacity
    // const [imgOpacity, imgOpacitySet] = useState(100)

    // useEffect(() => {
    //     // TODO has dup
    //     // when you scroll after img top
    //     if (window.scrollY >= ref.current.offsetTop + 3000) {
    //         // add +`10`px to image width
    //         imgOpacitySet(prev => prev - 1 / 2)
    //         ref.current.style.opacity = `${imgOpacity}%`
    //     } else {
    //         // !
    //         imgOpacitySet(100)
    //     }

    //     if (window.scrollY >= ref.current.offsetTop + 5000) {
    //         // !
    //         imgOpacitySet(100)
    //     }
    // }, [imgWidth])

    return (
        <Animation type="opacity">
            <div className='h100vh por zi2 hoverScale transition15'>
                <img
                    src={img}
                    className="ofCover poa ca"
                // width={1920 + imgWidth * 10} 
                // ref={ref} 
                />
            </div>
        </Animation>
    )
}
