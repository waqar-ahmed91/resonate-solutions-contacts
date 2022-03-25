import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar{
      width: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #cf8933;
    }
  }
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  h2 {
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    color: #fff;
    text-align: center;
  }
  input {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyle
