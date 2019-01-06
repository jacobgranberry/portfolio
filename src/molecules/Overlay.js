import React from 'react';
import NavLink from '../atoms/NavLink';
import styled from 'styled-components';
import colors from '../theme/colors';

import { HashLink as Link } from 'react-router-hash-link';

const OverlayWrapper = styled.div`
    position: fixed;
    background: #ffffff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    transition: opacity .35s, visibility .35s, height .35s;
    overflow: hidden;
    z-index: 5;
`

const AnchorLink = styled(Link)`
    display: block;
    color: ${colors.dark};
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    padding: 16px;
    line-height: 34px;
    transition: all 0.3s ease;

    &:hover {
        color: ${colors.blue}
    }
`

const OverlayNav = styled.nav`
    position: relative;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    font-weight: 400;
    text-align: left;
    margin-left: 15%;
`

const Overlay = () => {

    return (
        <>
        <OverlayWrapper>
            <OverlayNav>
                <NavLink to="/">Home</NavLink>
                <AnchorLink
                    to="/#projects"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >Projects</AnchorLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </OverlayNav>
        </OverlayWrapper>
        </>
    )
}

export default Overlay;