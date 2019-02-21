import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: 3rem 0;
`

const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;

    &:first-child {
      flex-basis: 100%;
      position: relative;
      margin: 0;

      .page-home & {
        opacity: 0;
      }
    }

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 400;
    text-transform: uppercase;
    transition: all 0.2s;

    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Triple P
            </Link>
          </li>
          <li>
            <Link to="/band/" activeStyle={activeLinkStyle}>
              Band
            </Link>
          </li>
          <li>
            <Link to="/bio/" activeStyle={activeLinkStyle}>
              Biographie
            </Link>
          </li>
          <li>
            <Link to="/gallery/" activeStyle={activeLinkStyle}>
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/events/" activeStyle={activeLinkStyle}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/presse/" activeStyle={activeLinkStyle}>
              Presse
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Kontakt
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
