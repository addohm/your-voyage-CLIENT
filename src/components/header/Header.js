import React from 'react'
import "./index.scss"
import LoginGoogle from "../LoginGoogle/LoginGoogle"

export default function Header() {

    function goTo(className) {
        document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
            // when animation done go once again
            document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        }, 2000);
    }

    return (
        <div className='header fcc jcsb p15'>
            <div className='fz20 brand hoverScale hoverFont500'>XY Consulting</div>
            <div className="fcc g15">
                <div className='header__btn' onClick={() => goTo("about")}>About</div>
                <div className='header__btn' onClick={() => goTo("coaching")}>Coaching</div>
                <div className='header__btn' onClick={() => goTo("tools")}>Tools</div>
                <LoginGoogle />
            </div>
        </div>
    )
}
