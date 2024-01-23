import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
         /* 62.5% of 16px browser font size is 10px */
        font-size: 62.5%;
    }
    body {
        background-color: #282c34;
        font-family:  'Roboto', 'Oxygen',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        
    }

`
export default GlobalStyle;