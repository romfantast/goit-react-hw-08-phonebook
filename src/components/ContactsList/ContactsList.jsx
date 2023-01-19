import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import css from './ContactsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFindFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import NoContactsInfo from 'components/NoContactInfo/NoContactInfo';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFindFilter);

  const showFilteredContacts = (() => {
    const filterStr = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStr)
    );
  })();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={css.contactList}>
        {showFilteredContacts.length === 0 && !isLoading && <NoContactsInfo />}
        {showFilteredContacts.map(contact => (
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
