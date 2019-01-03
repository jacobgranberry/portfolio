import React from 'react';

import Row from '../atoms/Row';
import Column from '../atoms/Column';
import NavLink from '../atoms/NavLink';
import ColoredSpan from '../atoms/ColoredSpan';

import styled from 'styled-components';
import colors from '../theme/colors';

const FooterWrapper = styled.footer`
    background-color: ${colors.dark};
    height: 350px;
`

const FooterLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Footer = () => (
    <>
    <FooterWrapper>
        <Row>
            <Column colmd3 colsm12></Column>
            <Column colmd3 colsm12></Column>
            <Column colmd3 colsm12>
                <FooterLinkWrapper>
                    <NavLink footerlink to="/">Home</NavLink>
                    <ColoredSpan white>/</ColoredSpan>
                    <NavLink footerlink to="/">Projects</NavLink>
                    <ColoredSpan white>/</ColoredSpan>
                    <NavLink footerlink to="/about">About</NavLink>
                    <ColoredSpan white>/</ColoredSpan>
                    <NavLink footerlink to="/contact">Contact</NavLink>
                </FooterLinkWrapper>
            </Column>
        </Row>

    </FooterWrapper>
    </>
)

export default Footer;