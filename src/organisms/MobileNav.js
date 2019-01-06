import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import styled from 'styled-components';
import Overlay from '../molecules/Overlay';

const MobileNavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px 24px;
    z-index: 10;

    @media (min-width: 48em) {
        display: none;
    }
`


class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state= {
            open: false
        }
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
                    menuClicked={this.handleClick.bind(this)}
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
                <Overlay/>
                :
                null
            }
            </>
        )
    }
}

export default MobileNav;