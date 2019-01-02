import styled, {css} from 'styled-components';
import colors from '../theme/colors';

const Section = styled.section`
    height: 100vh;

    ${props => props.light && css`
        background: ${colors.light}
    `}
`

export default Section