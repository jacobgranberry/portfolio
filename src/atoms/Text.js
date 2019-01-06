import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Text = styled.p`
    font-size: 32px;
    color: ${colors.dark};
    line-height: 30px;
    padding: 12px 24px;

    @media (max-width: 36em) {
        font-size: 26px;
    }

    ${props => props.centered && css`
        text-align: center;
    `}

    ${props => props.home && css`
        font-size: 24px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    `}

    ${props => props.regular && css`
        font-size: 18px;

        @media (max-width: 48em) {
            font-size: 16px;
        }
    `}

    ${props => props.semibold && css`
        font-weight: 500;
    `}
`

export default Text;