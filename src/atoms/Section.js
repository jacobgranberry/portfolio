import styled, { css, keyframes } from 'styled-components';
import colors from '../theme/colors';

const gradient = keyframes`
0% {
background-position: 0% 50%
}
50% {
background-position: 100% 50%
}
100% {
background-position: 0% 50%

`

const Section = styled.section`
    background: ${colors.gradient};
    height: 100vh;
    /* animation: ${gradient} 15s ease infinite; */

    ${props => props.full && css`
    background: ${colors.gradient}
        padding: 0;
        margin: 0;
        height: 100%;
    `}

`

export default Section