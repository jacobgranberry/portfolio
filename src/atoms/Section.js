import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Section = styled.section`
    height: 100vh;
    background: ${colors.gradient}

    ${props => props.test && css`
        height: 100%;
    `}

`

export default Section