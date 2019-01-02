import React from 'react';
import styled from 'styled-components';
import NavLink from '../atoms/NavLink';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`


const Nav = () => (
    <>
    <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </NavWrapper>
    </>
)

export default Nav;