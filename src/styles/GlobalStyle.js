import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin:0 ;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    

    &::-webkit-scrollbar{
        width: 10px;
        background: #000;
    }

    &::-webkit-scrollbar-button{
        background:#000;
        border:1px solid #FFF;
    }

    &::-webkit-scrollbar-track{
        background: #000;
    }

    &::-webkit-scrollbar-thumb{
        border:1px solid #FFF;
    }
}
`
