import styled from 'styled-components';
import colors from '../theme/colors';
import { Link } from 'react-router-dom';


const NavLink = styled(Link)`
    display: block;
    color: ${colors.dark};
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    padding: 1rem;
    line-height: 34px;
`

export default NavLink