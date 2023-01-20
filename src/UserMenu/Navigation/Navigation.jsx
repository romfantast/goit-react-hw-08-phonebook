import NavItem from 'components/NavItem/NavItem';
import React from 'react';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <nav>
      <ul className={css.nav_list}>
        <NavItem path="/">Home</NavItem>
        {isLoggedIn && <NavItem path="contacts">Contacts</NavItem>}
      </ul>
    </nav>
  );
};
