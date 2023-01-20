import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import css from './ContactsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import NoContactsInfo from 'components/NoContactInfo/NoContactInfo';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contactList}>
        {contacts.length === 0 && !isLoading && <NoContactsInfo />}
        {contacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <p className={css.contactInfoWrapper}>
              <BiUserCircle className={css.contactIcon} />
              <span className={css.contactName}>{contact.name}:</span>&nbsp;
              <span className={css.contactPhone}>{contact.number}</span>
            </p>

            <DeleteButton
              type="button"
              onDeleteContact={() => handleDelete(contact.id)}
              id={contact.id}
              actionText=" Delete"
            >
              <BsXCircle />
            </DeleteButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
