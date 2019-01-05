import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../theme/colors';

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 12px;
`

const Icon = styled.a`
    cursor: pointer;
    color: ${colors.gray};

    &:hover rect {
        transition: all 0.3s ease;
        color: ${colors.blue}
    }

`

const FooterIcons = () => (
    <>
        <Icons>
            <Icon href="https://www.linkedin.com/in/jacob-granberry/">
                <FontAwesomeIcon
                    fixedWidth
                    transform="shrink-7"
                    icon={['fab','linkedin-in']}
                    mask={['fas', 'circle']}
                    size="3x" />
            </Icon>
            <Icon href="https://github.com/jacobgranberry">
                <FontAwesomeIcon
                    fixedWidth
                    transform="shrink-7"
                    icon={['fab','github-alt']}
                    mask={['fas', 'circle']}
                    size="3x"/>
            </Icon>
            <Icon href="https://www.instagram.com/jacobgeeberry/">
                <FontAwesomeIcon
                    fixedWidth
                    transform="shrink-7"
                    icon={['fab','instagram']}
                    mask={['fas', 'circle']}
                    size="3x"/>
            </Icon>
        </Icons>
    </>
)

export default FooterIcons