import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { List } from 'reactstrap'
import { Context } from '../../context';

import './styles.scss';

export const DropdownUser = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const logout = () => {
    setUser({
      firstName: '',
      surName: '',
      email: '',
      role: ''
    });
    navigate('/');    
  }
  return (
    <List>
        <li onClick={() => navigate('/profile')}>Mi perfil</li>
        <li>Mis clases</li>
        <li onClick={logout}>Cerrar sesión</li>
    </List>
  )
}
