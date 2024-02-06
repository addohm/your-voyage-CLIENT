import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import HeaderFixedMargin from './HeaderFixedMargin';
import Burger from '../burger/Burger';
import HeaderNav from './HeaderNav';
import useWindowSize from '../../hooks/useWindowSize';
import HeaderNavMobile from './HeaderNavMobile';
import HeaderLogo from './HeaderLogo';
import { Context } from '../../Context';

export default function Header() {

    const [isHovered, isHoveredSet] = useState(false)
    const [isVisible, isVisibleSet] = useState(true)
    const [scrollY, scrollYSet] = useState(true)
    const { isVisibleMobileNav, isVisibleMobileNavSet } = useContext(Context)
    const { isMobile } = useWindowSize()

    // isVisible Header
    useEffect(() => {
        !isMobile && scrollY === 0 ? isVisibleSet(true) : isVisibleSet(false) // pc visible on very top + if hovered Header's place on top
        isMobile && isVisibleSet(true) // mobile always visible
        isVisibleSet(true) // Header visible on all devices: REMOVE for "only show on top & on hover"
    }, [scrollY])

    // handleScroll
    useEffect(() => {
        const handleScroll = () => scrollYSet(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            <header className={`header pof t0 l0 w100p zi9 fcc jcsb p15 bg_white zi2 ${isHovered || isVisible ? "op1 transition05" : "op0 transition05"} opAnim3`} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <HeaderLogo isVisibleMobileNavSet={isVisibleMobileNavSet} />
                <Burger isVisible={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} isVisibleMobileNav={isVisibleMobileNav} />
                <HeaderNav isVisible={!isMobile} />
                <HeaderNavMobile isVisibleMobileNav={isVisibleMobileNav} isMobile={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} />
            </header>
            <HeaderFixedMargin />
        </>
    )
}
