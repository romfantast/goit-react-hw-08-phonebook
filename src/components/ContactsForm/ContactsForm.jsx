import React from 'react';
import css from './ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contacts-operations';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleContactData = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return Notify.warning('This contact is already in the list');
    }

    const contact = {
      name: name.value,
      number: number.value,
    };
    dispatch(addContact(contact));
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleContactData} className={css.form}>
      <h3>Name</h3>
      <div className={css.inputWrapper}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters"
          required
        />
      </div>
      <h3>Phone</h3>
      <div className={css.inputWrapper}>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits"
          required
        />
      </div>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
