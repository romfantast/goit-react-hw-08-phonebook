import NavItem from 'components/NavItem/NavItem';
import React from 'react';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.nav_list}>
        <NavItem path="/">Home</NavItem>
        <NavItem path="contacts">Contacts</NavItem>
      </ul>
    </nav>
  );
};
