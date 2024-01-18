import React, { useEffect, useState } from 'react'

export default function PrintingText({ text, className, time = 10 }) {

    const [stateText, stateTextSet] = useState("")

    useEffect(() => {
        let i = -1
        const intervalId = setInterval(() => {
            i++
            stateTextSet(prev => prev + text?.[i])
            if (i === text?.length - 1) {
                clearInterval(intervalId);
            }
        }, time)

        return () => clearInterval(intervalId)
    }, [text])

    return (
        <p className={`font2 ${className}`}>{stateText}</p>
    )
}
