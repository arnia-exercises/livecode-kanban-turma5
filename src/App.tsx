import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/theme"

import { Router } from "./router"
import { GlobalStyle } from "./assets/styles/GlobalStyle"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
