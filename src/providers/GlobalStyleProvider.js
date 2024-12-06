import { createGlobalStyle } from "styled-components";

const GlobalStyleProvider = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Poppins", sans-serif;
        background-color: #d6cbd3;
        color:white;
    }
`;

export default GlobalStyleProvider;