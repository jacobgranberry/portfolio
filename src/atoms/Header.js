import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Header = styled.div`
    font-family: 'fat-frank', sans-serif;
    font-size: 31vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .75rem;
    text-transform: uppercase;
    background: ${colors.gradient};
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

    ${props => props.granberry && css`
        font-size: 18vh;
    `}
`

export default Header;