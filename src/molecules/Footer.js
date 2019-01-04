import React from 'react';

import Row from '../atoms/Row';
import Column from '../atoms/Column';
import NavLink from '../atoms/NavLink';
import ColoredSpan from '../atoms/ColoredSpan';
import Button from '../atoms/Button';
import { HashLink as Link } from 'react-router-hash-link';

import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const FooterWrapper = styled.footer`
    background-color: ${colors.dark};
    height: 350px;
`

const FooterContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: flex-end;

    ${props => props.center && css`
        align-items: center;
    `}
`

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
`

const AnchorLink = styled(Link)`
    display: block;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    line-height: 34px;
    transition: all 0.3s ease;
    color: ${colors.yellow};
    padding: 16px 4px;

    &:hover {
        color: ${colors.white}
    }
`

const Footer = () => (
    <>
    <FooterWrapper>
        <Row>
            <Column colmd3 colsm12></Column>
            <Column colmd3 colsm12>
                <FooterContentWrapper center>
                    <Button footerbutton href="/contact">Contact Me</Button>
                </FooterContentWrapper>
            </Column>
            <Column colmd3 colsm12>
                <FooterContentWrapper>
                    <FooterContainer>
                        <NavLink footerlink="true" to="/">Home</NavLink>
                        <ColoredSpan white>/</ColoredSpan>
                        <AnchorLink
                            to="/#projects"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Projects</AnchorLink>
                        <ColoredSpan white>/</ColoredSpan>
                        <NavLink footerlink="true" to="/about">About</NavLink>
                    </FooterContainer>
                </FooterContentWrapper>
            </Column>
        </Row>

    </FooterWrapper>
    </>
)

export default Footer;