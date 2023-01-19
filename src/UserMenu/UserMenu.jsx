import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './pngaaa.com-1721303.png';
import authOperations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={css.logout_block}>
      <p>
        Welcome, <b>{name}</b>
      </p>
      <img src={defaultAvatar} alt="" width="30" height="30" />
      <button onClick={handleLogOut} className={css.logout_btn}>
        Logout
      </button>
    </div>
  );
};
