import React, {useState} from 'react'
import { Navbar, NavbarBrand,  UncontrolledDropdown, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { Login } from '../login';

import './styles.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color='light'
        container={true}
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo192.png"
            style={{
              height: 40,
              width: 40
            }}
          />
          derepaso
        </NavbarBrand>
        <Nav className=''>
          <NavItem>
            <NavLink disabled={true} href="/components/">Components</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                iniciar sesión
              </DropdownToggle>
              <DropdownMenu className='p-2 dropdown-login' end>
                <Login />
              </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}
//me-auto
