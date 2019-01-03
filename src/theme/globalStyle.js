import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: ${colors.light};
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        color: ${colors.white};
    }
`

export default GlobalStyle;

