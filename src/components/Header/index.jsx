import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

import React from "react"
import "./header.css"

export default function Header() {
  return (
    <div id="header">
      <header>THE SITE OF THINGS</header>

      {/* Sets up the nav bar that paths to the different pages */}
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/connectfour">
            Connect Four
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/roulette">
            Toy Gun Roulette
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
