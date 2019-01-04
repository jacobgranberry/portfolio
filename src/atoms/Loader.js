import styled, { keyframes } from 'styled-components';
import colors from '../theme/colors';

const spin = keyframes`
to {
    border-top-color: ${colors.red};
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
    -webkit-animation: spin 1s linear infinite;
    animation: ${spin} 1s linear infinite;
    border: 3px solid #ddd;
    border-top: 3px solid ${colors.blue};
    border-radius: 50%;
    height: 75px;
    width: 75px;
`

export default Loader;