import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ children }) => {
  return <li>{children}</li>;
};

export const Menu = () => {
  return (
    <div className='menu'>
      <NavLink className='menu_item' to='/coordinates'>
        <MenuItem>Первый экран</MenuItem>
      </NavLink>
      <NavLink className='menu_item' to='/history'>
        <MenuItem>Второй экран</MenuItem>
      </NavLink>
    </div>
  );
};
