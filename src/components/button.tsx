import styled, { createGlobalStyle } from 'styled-components'

export const Button = styled.div`
  color: ${props => props.theme.colors.primary};
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
`

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`
