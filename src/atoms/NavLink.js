import styled, { css } from 'styled-components';
import colors from '../theme/colors';
import { Link } from 'react-router-dom';


const NavLink = styled(Link)`
    display: block;
    color: ${colors.dark};
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    padding: 16px;
    line-height: 34px;

    &:hover {
        color: ${colors.blue}
    }

    ${props => props.footerlink && css`
        color: ${colors.yellow};
        padding: 16px 4px;

        &:hover {
            color: ${colors.white}
        }
    `}
`

export default NavLink