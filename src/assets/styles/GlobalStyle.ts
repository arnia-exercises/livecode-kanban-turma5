import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`


export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

export const Column = styled.div`
  border: 1px solid #ddd;
  padding: .5rem;
  min-height: 100vh;
`