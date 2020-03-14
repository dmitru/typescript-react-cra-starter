import { hot } from 'react-hot-loader'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme'
import 'app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/home'
import { PageOne } from 'pages/page-one'
import { PageTwo } from 'pages/page-two'

const App: React.FC<{}> = () => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <Switch>
          <Route path="/page-2" strict>
            <PageTwo />
          </Route>
          <Route path="/page-1" strict>
            <PageOne />
          </Route>
          <Route path="/" strict>
            <HomePage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export const AppHotReloadable = hot(module)(App)
