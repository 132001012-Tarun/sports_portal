import React from 'react';
import {
  Nav,
  Bars,
  NavMenu,
  NavLinkWithGap,
} from './NavbarElements';
import '../style/Navbar.css';

const Navbar = (props) => {
  return (
    <Nav>
      <Bars />
      <ul>
        <NavMenu>
              <li>
                <NavLinkWithGap to='/home' exact>Home</NavLinkWithGap>
              </li>
              <li>
              <NavLinkWithGap to="/cricket">Cricket</NavLinkWithGap>
              </li>
              <li>
                <NavLinkWithGap to='/footBall'>FootBall</NavLinkWithGap>
              </li>
              <li>
                <NavLinkWithGap to='/volleyBall'>VolleyBall</NavLinkWithGap>
              </li>
              <li>
                <NavLinkWithGap to='/tt'>TT</NavLinkWithGap>
              </li>
              <li>
                <NavLinkWithGap to='/basketBall'>BasketBall</NavLinkWithGap>
              </li>
              <li>
                <NavLinkWithGap to='/badminton'>Badminton</NavLinkWithGap>
              </li>
        </NavMenu>
      </ul>
    </Nav>
  );
};

export default Navbar;
