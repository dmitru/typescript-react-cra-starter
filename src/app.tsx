import { hot } from 'react-hot-loader'

import React from 'react'
import logo from 'logo.svg'
import 'app.css'
import { GlobalStyle, Button } from 'components/button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme'

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <GlobalStyle />
          <Button>Themed Button</Button>
        </header>
      </div>
    </ThemeProvider>
  )
}

export const AppHotReloadable = hot(module)(App)
