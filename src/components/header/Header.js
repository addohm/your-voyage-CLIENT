import React, { useEffect, useState } from 'react'
import "./index.scss"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import HeaderFixedMargin from './HeaderFixedMargin';
import delay from '../../utils/delay';

export default function Header() {

    const navigate = useNavigate()

    async function goTo(className) {
        navigate(MAIN_ROUTE)
        await delay(100);

        document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
            // when animation done go once again
            document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        }, 2000);
    }

    const [isHovered, isHoveredSet] = useState(false);
    const [isVisible, isVisibleSet] = useState(true);
    const [scrollY, scrollYSet] = useState(true);

    // isVisible
    useEffect(() => {
        scrollY === 0 ? isVisibleSet(true) : isVisibleSet(false)
    }, [scrollY])

    // handleScroll
    useEffect(() => {
        const handleScroll = () => scrollYSet(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            <div className={`header pof t0 l0 w100p zi9 fcc jcsb p15 ${isHovered || isVisible ? "op1 transition05" : "op0 transition05"}`} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <Link to={MAIN_ROUTE} onClick={() => window.scrollTo(0, 0)}>
                    <div className='fz20 brand hoverScale hoverFont500'>XY Consulting</div>
                </Link>
                <div className="fcc g15">
                    <div className='header__btn' onClick={() => goTo("about")}>About</div>
                    <div className='header__btn' onClick={() => goTo("coaching")}>Coaching</div>
                    <div className='header__btn' onClick={() => goTo("tools")}>Tools</div>
                    <LoginGoogle />
                </div>
            </div>
            <HeaderFixedMargin />
        </>
    )
}
