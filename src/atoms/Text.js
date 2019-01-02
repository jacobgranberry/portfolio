import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Text = styled.p`
    font-size: 32px;
    color: ${colors.dark};
    line-height: 39px;
    padding: 12px 24px;

    ${props => props.centeredhome && css`
        font-size: 24px;
        text-align: center;
        margin-top: 62px;
    `}
`

export default Text;