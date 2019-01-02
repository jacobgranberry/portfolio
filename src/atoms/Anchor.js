import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import { Link } from 'react-router-dom';

const AnchorWrapper = styled(Link)`
    display: block;
    color: ${colors.white};
    font-weight: 500;
    font-size: 22px;
    text-decoration: none;
`
const Anchor = ({ children }) => (
    <AnchorWrapper>
        {children}
    </AnchorWrapper>
)

export default Anchor