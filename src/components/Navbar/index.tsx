import { Nav, MobileIcon, NavItem, NavLinks, NavMenu, NavLogo, NavbarContainer } from './Navbar.styled';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router';

interface NavbarProps {
  setShow: () => void;
}

const Navbar = ({ setShow }: NavbarProps) => {
  const { pathname } = useLocation();
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Rick and Morty API</NavLogo>
          <MobileIcon onClick={setShow}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/characters">Characters</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/episodes">Episodes</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
