import NavItem from 'components/NavItem/NavItem';
import React from 'react';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.register_login_wrapper}>
      <NavItem path="register">Register</NavItem>
      <NavItem path="login">Login</NavItem>
    </ul>
  );
};
