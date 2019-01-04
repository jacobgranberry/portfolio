import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const BoxAltWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 47px 0;
`

const StyledBoxAlt = styled.div`
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    position: relative;
    background-image: ${colors.gradientlight};
`
const BoxAlt = ({ children }) => (
    <BoxAltWrapper>
        <StyledBoxAlt>
            {children}
        </StyledBoxAlt>
    </BoxAltWrapper>
)

export default BoxAlt;