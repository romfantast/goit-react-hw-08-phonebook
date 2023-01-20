import NavItem from 'components/NavItem/NavItem';
import React from 'react';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { AiFillContacts, AiFillHome } from 'react-icons/ai';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <nav>
      <ul className={css.nav_list}>
        <NavItem path="/">
          <span className={css.link}>
            <AiFillHome /> Home
          </span>
        </NavItem>
        {isLoggedIn && (
          <NavItem path="contacts">
            <span className={css.link}>
              <AiFillContacts /> Contacts
            </span>
          </NavItem>
        )}
      </ul>
    </nav>
  );
};
