import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import colors from '../theme/colors';
import NavLink from '../atoms/NavLink';


const MobileNavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px 24px;
    z-index: 10;
    position: relative;

    @media (min-width: 48em) {
        display: none;
    }
`

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


class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state= {
            open: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <>
            <MobileNavWrapper>
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick}
                    width={35}
                    height={25}
                    strokeWidth={3}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </MobileNavWrapper>
            {this.state.open ?
                 <OverlayWrapper>
                 <OverlayNav>
                     <NavLink
                        to="/"
                        onClick={this.handleClick}>Home</NavLink>
                     <AnchorLink
                        to="/#projects"
                        onClick={this.handleClick}
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >Projects</AnchorLink>
                     <NavLink
                        to="/about"
                        onClick={this.handleClick}
                        >About</NavLink>
                     <NavLink
                     to="/contact"
                     onClick={this.handleClick}>Contact</NavLink>
                 </OverlayNav>
             </OverlayWrapper>
                :
                null
            }
            </>
        )
    }
}

export default MobileNav;