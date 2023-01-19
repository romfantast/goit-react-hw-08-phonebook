import React from 'react';
import css from './AppBar.module.css';
import { Navigation } from 'UserMenu/Navigation/Navigation';
import { AuthNav } from 'UserMenu/AuthNav/AuthNav';
import { UserMenu } from 'UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.appbar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
