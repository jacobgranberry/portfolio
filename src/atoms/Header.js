import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Header = styled.div`
    font-family: 'fat-frank', sans-serif;
    font-size: 31vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    text-transform: uppercase;
    background: ${colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 76em) {
        font-size: 18vh;
    }

    @media (max-width: 48em) {
        font-size: 12vh;
    }

    @media (max-width: 36em) {
        font-size: 8vh;
    }

    ${props => props.granberry && css`
        font-size: 18vh;
        padding: 0 24px;
        margin-top: -32px;

        @media (max-width: 76em) {
            font-size: 10vh
        }

        @media (max-width: 48em) {
            font-size: 8vh;
        }

        @media (max-width: 36em) {
            font-size: 4vh;
        }
    `}
`

export default Header;