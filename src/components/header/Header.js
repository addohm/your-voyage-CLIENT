import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import HeaderFixedMargin from './HeaderFixedMargin';
import Burger from '../burger/Burger';
import HeaderNav from './HeaderNav';
import useWindowSize from '../../hooks/useWindowSize';
import HeaderNavMobile from './HeaderNavMobile';
import HeaderLogo from './HeaderLogo';
import { Context } from '../../Context';
import { useLocation } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';

export default function Header() {

    const [isHovered, isHoveredSet] = useState(false)
    const [isVisible, isVisibleSet] = useState(true)
    const [scrollY, scrollYSet] = useState(true)
    const { isVisibleMobileNav, isVisibleMobileNavSet, user } = useContext(Context)
    const { isMobile } = useWindowSize()
    const location = useLocation().pathname
    const isInExactChatLocation = location.includes("/message/")

    // isVisible Header
    useEffect(() => {
        !isMobile && scrollY === 0 ? isVisibleSet(true) : isVisibleSet(false) // pc visible on very top + if hovered Header's place on top
        !isInExactChatLocation && isMobile && isVisibleSet(true) // mobile header always visible: not in ExactChatLocation: to see MessageDate
        // ! show header on hover only for ExactChatLocation: other locations: always visible 
        !isInExactChatLocation && isVisibleSet(true) // Header visible on all devices: REMOVE for "only show on top & on hover"
    }, [scrollY, user])

    // handleScroll
    useEffect(() => {
        const handleScroll = () => scrollYSet(window.scrollY)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    // NOT WORKING AS EXPECTED
    // // block scroll on mobile while menu is open
    // useEffect(() => {
    //     isVisibleMobileNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = "none"
    // }, [isVisibleMobileNav])

    if (user === null) return // prevent ugly user email (LoginDisplayEmail) appearing: user is not defined yet

    return (
        <>
            <header className={`header pof t0 l0 w100p zi9 fcc jcsb p15 ${!isMobile ? "glass" : "bg_white"} zi2 ${isHovered || isVisible ? "op1 transition05" : "op0 transition05"} ${(location !== MAIN_ROUTE && !isInExactChatLocation) ? "headerFadeIn" : ""}`} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <HeaderLogo isVisibleMobileNavSet={isVisibleMobileNavSet} />
                <Burger isVisible={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} isVisibleMobileNav={isVisibleMobileNav} />
                <HeaderNav isVisible={!isMobile} />
                <HeaderNavMobile isVisibleMobileNav={isVisibleMobileNav} isMobile={isMobile} isVisibleMobileNavSet={isVisibleMobileNavSet} />
            </header>
            <HeaderFixedMargin />
        </>
    )
}
