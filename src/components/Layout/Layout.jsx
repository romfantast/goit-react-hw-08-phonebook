import React from 'react';
import css from './Layout.module.css';
import { Outlet } from 'react-router';
import { AppBar } from 'UserMenu/AppBar/AppBar';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isRefreshing = useSelector(authSelectors.selectIsFetchingCurrent);
  return (
    <div className={css.layout}>
      <AppBar />
      {isRefreshing && <p>Loading...</p>}
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
