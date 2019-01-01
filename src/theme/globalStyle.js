import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #333333;
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        color: #ffffff;
    }
`

export default GlobalStyle;