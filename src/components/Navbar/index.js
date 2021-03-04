import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavLinks } from './Navbar.elements';
export const Navbar = () => {
    return (
        <div>
            <Nav>
          <h1 class="logo">Technobizz</h1>
          <ul>
              <li><NavLinks to='/'>Home</NavLinks></li>
              <li><NavLinks to='/solutions'>Solutions</NavLinks></li>
              <li><NavLinks to='/services'>Services</NavLinks></li>
              <li><NavLinks to='/marketing'>Marketing</NavLinks></li>
          </ul>
      </Nav>
        </div>
    )
}
