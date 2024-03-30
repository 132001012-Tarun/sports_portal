import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLinkWithGap,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './Navbar.css';

const Navbar = (props) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <Nav>
      <Bars />
      <ul>
        <NavMenu>
          <li>
            <NavLinkWithGap to='/' exact>Home</NavLinkWithGap>
          </li>
          {isAuthenticated && (
            <>
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
            </>
          )}
          <li>
            {isAuthenticated && (
              <p>{user.name}</p>
            )}
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </li>
        </NavMenu>
      </ul>
    </Nav>
  );
};

export default Navbar;
