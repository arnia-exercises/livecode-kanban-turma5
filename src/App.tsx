import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/theme"

import { Router } from "./router"
import { GlobalStyle } from "./assets/styles/GlobalStyle"
import { CardProvider } from "./context/CardContext"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <CardProvider>
        <Router />
      </CardProvider>
    </ThemeProvider>
  )
}

export default App
