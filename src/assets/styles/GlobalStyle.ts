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

export const Box = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #006699;
  border-radius: 8px;
  padding: .5rem;
  margin: 1rem .5rem;

  h3 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }
`

export const BoxModal = styled.div`
  position: fixed;
  top: 50%;
  width: 400px;
  padding: 1rem;
  background: #fff;
  border: 2px solid #069;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #676767;
  left: 50%;
  transform: translate(-50%, -50%);
`