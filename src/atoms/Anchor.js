import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const AnchorWrapper = styled.a`
    display: block;
    color: ${colors.white};
    font-weight: 500;
    font-size: 28px;
`
const Anchor = ({ children }) => (
    <AnchorWrapper>
        {children}
    </AnchorWrapper>
)

export default Anchor