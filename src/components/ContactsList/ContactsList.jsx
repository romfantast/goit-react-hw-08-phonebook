import React from 'react';
import css from './ContactsList.module.css';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import NoContactsInfo from 'components/NoContactInfo/NoContactInfo';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {contacts.length === 0 && !isLoading && <NoContactsInfo />}
        {contacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
