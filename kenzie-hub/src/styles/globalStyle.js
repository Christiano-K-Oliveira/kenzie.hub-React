import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4);
    }

    button{
        cursor: pointer;
    }

    :root{
        --black-100: #000000;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --color-primary: #FF577F;
        --color-primary-50: #FF427F;
        --color-primary-disable: #59323F;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-size-1: 24px;
        --font-size-2: 20px;
        --font-size-3: 18px;
        --font-size-4: 16px;
        --font-size-5: 14px;
        --font-size-6: 12px;

        --border-radius-1: 4px;
        --border-radius-2: 8px;
    }
`

export default GlobalStyle