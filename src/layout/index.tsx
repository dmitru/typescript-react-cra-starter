import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/button'
import styled from 'styled-components'

const Nav = styled.div`
  ul {
    display: flex;
    flex-direction: row;

    list-style: none;

    li {
      margin: 0;

      a {
        margin-right: 10px;
        &:hover {
          color: ${props => props.theme.colors.secondary};
        }
        text-decoration: none;
      }
    }
  }
`

const Main = styled.main`
  padding: 20px;
`

export const PageLayout: React.FC<{ children: React.ReactNode }> = props => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <Button as={Link} to="/">
              Home
            </Button>
          </li>
          <li>
            <Button as={Link} to="/page-1">
              Page One
            </Button>
          </li>
          <li>
            <Button as={Link} to="/page-2">
              Page Two
            </Button>
          </li>
        </ul>
      </Nav>

      <Main>{props.children}</Main>
    </div>
  )
}
