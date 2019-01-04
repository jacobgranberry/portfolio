import React from 'react';
import styled from 'styled-components';
import NavLink from '../atoms/NavLink';
import colors from '../theme/colors';

import { HashLink as Link } from 'react-router-hash-link';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 24px;
`
const AnchorLink = styled(Link)`
    display: block;
    color: ${colors.dark};
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    padding: 16px;
    line-height: 34px;

    &:hover {
        color: ${colors.blue}
    }
`


const Nav = () => (
    <>
    <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <AnchorLink
            to="/#projects"
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >Projects</AnchorLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </NavWrapper>
    </>
)

export default Nav;