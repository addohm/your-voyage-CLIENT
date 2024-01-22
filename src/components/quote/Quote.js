import React from 'react'
import Title from '../other/Title'
import PrintingText from '../animation/PrintingText'

export default function Quote({ title, text, titleClassName, className }) {
    return (
        <div className={`maw800 p15 m0a tac ls1 ${className ? className : ""}`}>
            {text && <PrintingText text={text} />}
            <Title title={title} className={`wfc mla changeOrder21 ${titleClassName}`} lineClassName={titleClassName === "brand" ? "bg_brand" : ""} />
        </div>
    )
}
