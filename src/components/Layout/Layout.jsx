import React from 'react';
import css from './Layout.module.css';
import { Outlet } from 'react-router';
import { AppBar } from 'UserMenu/AppBar/AppBar';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
