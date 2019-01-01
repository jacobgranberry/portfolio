import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
    @import: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${colors.dark};
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        color: ${colors.white};
    }
`

export default GlobalStyle;