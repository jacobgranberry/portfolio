import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../theme/colors';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const NavLink = styled(Link)`
    display: block;
    color: ${colors.white};
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    padding: 1rem;
`

const Nav = () => (
    <>
    <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Contact</NavLink>
    </NavWrapper>
    </>
)

export default Nav;