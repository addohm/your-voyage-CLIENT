import React from 'react'
import "./index.scss"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import HeaderFixedMargin from './HeaderFixedMargin';

export default function Header() {

    const navigate = useNavigate()
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function goTo(className) {
        navigate(MAIN_ROUTE)
        await delay(100);

        document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
            // when animation done go once again
            document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })
        }, 2000);
    }

    return (
        <>
            <div className='header pof t0 l0 w100p zi9 fcc jcsb p15'>
                <Link to={MAIN_ROUTE}>
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
