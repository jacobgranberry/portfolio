import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Header = styled.div`
    font-family: 'righteous', sans-serif;
    font-size: 31vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    text-transform: uppercase;


    ${props => props.jacob && css`
        flex: none;
        color: ${colors.darkred};
        @media (max-width: 76em) {
            font-size: 18vh;
        }

        @media (max-width: 48em) {
            font-size: 12vh;
        }

        @media (max-width: 36em) {
            font-size: 11vh;
        }
    `}


    ${props => props.granberry && css`
        color: ${colors.darkred};
        font-size: 14vh;
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

    ${props => props.card && css`
        color: ${colors.dark};
        font-size: 38px;

        @media (max-width: 36em) {
            font-size: 28px;
        }
    `}
`

export default Header;