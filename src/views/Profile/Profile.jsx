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
      <br />
      <p className={css.row_centered}>
        <img src={defaultAvatar} alt="" width="30" height="30" />
        {name}
      </p>
      <br />
      <hr />
      <br />
      <p>
        Total contacts: <b>{contactsQuantity.length}</b>
      </p>
      <br />
      <hr />
      <br />
      <h3>More info: </h3>
      <br />
      <div className={css.card}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          molestias.
        </p>
        <p>
          Dignissimos labore maxime distinctio dicta nostrum consequuntur
          blanditiis.
        </p>
      </div>
      <br />
      <hr />
    </div>
  );
};
