import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import HeaderFixedMargin from './HeaderFixedMargin';
import Burger from '../burger/Burger';
import HeaderNav from './HeaderNav';
import useWindowSize from '../../hooks/useWindowSize';
import HeaderNavMobile from './HeaderNavMobile';

export default function Header() {

    const [isHovered, isHoveredSet] = useState(false);
    const [isVisible, isVisibleSet] = useState(true);
    const [scrollY, scrollYSet] = useState(true);
    const [isVisibleMobileNav, isVisibleMobileNavSet] = useState(false);
    const { isMobile } = useWindowSize()

    // isVisible Header
    useEffect(() => {
        !isMobile && scrollY === 0 ? isVisibleSet(true) : isVisibleSet(false) // pc visible on very top + if hovered Header's place on top
        isMobile && isVisibleSet(true) // mobile always visible
    }, [scrollY])

    // handleScroll
    useEffect(() => {
        const handleScroll = () => scrollYSet(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            <div className={`header pof t0 l0 w100p zi9 fcc jcsb p15 bg_white zi2 ${isHovered || isVisible ? "op1 transition05" : "op0 transition05"}`} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <Link to={MAIN_ROUTE} onClick={() => window.scrollTo(0, 0)}>
                    <div className='fz20 brand hoverScale hoverFont500'>XY Consulting</div>
                </Link>
                <Burger isVisible={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} isVisibleMobileNav={isVisibleMobileNav} />
                <HeaderNav isVisible={!isMobile} />
                <HeaderNavMobile isVisibleMobileNav={isVisibleMobileNav} isMobile={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} />
            </div>
            <HeaderFixedMargin />
        </>
    )
}
