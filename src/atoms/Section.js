import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Section = styled.section`
    background: ${colors.gradient};
    height: 100vh;


    ${props => props.full && css`
    background: ${colors.gradient}
        padding: 0;
        margin: 0;
        height: 100%;
    `}

`

export default Section