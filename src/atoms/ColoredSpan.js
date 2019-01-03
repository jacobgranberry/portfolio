import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const ColoredSpan = styled.span`
    color: ${colors.blue}

    ${props => props.white && css`
        color: ${colors.white}
    `}
`
export default ColoredSpan