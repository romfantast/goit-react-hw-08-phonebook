import React from 'react';
import css from './Profile.module.css';
import defaultAvatar from '../../UserMenu/pngaaa.com-1721303.png';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { selectContacts } from '../../redux/contacts/contacts-selectors';

export const Profile = () => {
  const name = useSelector(authSelectors.selectUserName);
  const contactsQuantity = useSelector(selectContacts);

  return (
    <div className={css.profile}>
      <h2>Profile page</h2>
      <hr />
      <p className={css.row_centered}>
        <img src={defaultAvatar} alt="" width="30" height="30" />
        {name}
      </p>
      <hr />
      <p>Total contacts: {contactsQuantity.length}</p>
      <hr />
    </div>
  );
};
