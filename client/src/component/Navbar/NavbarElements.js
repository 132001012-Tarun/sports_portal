import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #1b1b1b;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;     
  position: sticky;
  padding: 10px 22px;
  top: 0;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  display: flex; 
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 4px;
  align-items: center;

  &:hover {
    color: #5aff3d;
  }
`;

export const Bars = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #5aff3d;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #1b1b1b;
  }
`;
export const NavLinkWithGap = styled(NavLink)`
  margin-right: 10px;
`;
