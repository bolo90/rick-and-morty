import styled from 'styled-components';
import { device } from '../../theme/breakpoints';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: 'Creepster', cursive;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media ${device.lg} {
    width: 75%;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 26px;
  cursor: pointer;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;

  @media ${device.lg} {
    font-size: 42px;
  }
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 8px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 26px;
  cursor: pointer;
  @media ${device.md} {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  @media ${device.md} {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.variables.neonGreen};
  }
`;