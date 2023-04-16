import React from 'react';
import PropTypes from 'prop-types'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar=(props)=> {
  return (
    <Nav >
    <Bars />

    <NavMenu>
    <NavLink to='/' >
        Home
      </NavLink>
      <NavLink to='/cricket' >
        Cricket
      </NavLink>
      <NavLink to='/footBall' >
        FootBall
      </NavLink>
      <NavLink to='/volleyBall' >
        VolleyBall
      </NavLink>
      <NavLink to='/tt' >
        TT
      </NavLink>
      <NavLink to='/basketBall' >
        BasketBall
      </NavLink>
      <NavLink to='/badminton' >
        Badminton
      </NavLink>
      </NavMenu>
      </Nav>
  );
}

  
export default Navbar;