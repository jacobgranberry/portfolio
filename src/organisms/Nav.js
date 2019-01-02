import React from 'react';
import Anchor from '../atoms/Anchor';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
`

const Nav = () => (
    <NavWrapper>
        <Anchor><Link to="/">Home</Link></Anchor>
        <Anchor><Link to="/about">About</Link></Anchor>
    </NavWrapper>
)

export default Nav;