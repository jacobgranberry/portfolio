import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const BoxWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const StyledBox = styled.div`
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    position: relative;
    background-image: ${colors.gradientlight};
`
const Box = ({ children }) => (
    <BoxWrapper>
        <StyledBox>
            {children}
        </StyledBox>
    </BoxWrapper>
)

export default Box;