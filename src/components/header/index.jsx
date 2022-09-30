import React, {useState} from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand,  UncontrolledDropdown, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { Context } from '../../context';
import { DropdownUser } from '../dropdown-user';
import { Login } from '../login';

import './styles.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(Context);
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
            src="/assets/logo.png"
            className='mx-2'
            style={{
              height: 40,
              width: 50
            }}
          />
          derepaso
        </NavbarBrand>
        <Nav className=''>
          <NavItem>
            {user && user.firstName ? (
              <NavLink onClick={() => navigate('/new-class')}>
                Crear una clase
              </NavLink>
              ): 
              <NavLink className="nav-disabled" disabled={true} href="/signup">
                Aprendé ahora y desde tu casa
              </NavLink> 
            }
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {user && user.firstName ? `${user.firstName}` : 'iniciar sesión'}
              </DropdownToggle>
              <DropdownMenu className='p-2 dropdown-login' end>
                {user && user.firstName ? <DropdownUser /> : <Login />}
              </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}
//me-auto
