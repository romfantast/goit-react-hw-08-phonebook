import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import { updateContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onToggleModal, name, number, id }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    const isAlreadyInList = contacts.find(
      contact => contact.name === name.value
    );

    if (isAlreadyInList) {
      return Notify.warning('This contact is already in the list');
    }

    const updateContactData = {
      name: name.value,
      number: number.value,
    };

    dispatch(updateContact({ contactId: id, contact: updateContactData }));
    e.target.reset();
    onToggleModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <h3 className={css.editTitle}>Edit contact</h3>
        <form
          className={css.editForm}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters"
            required
            type="text"
            placeholder="name"
            name="name"
            defaultValue={name}
          />
          <input
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits"
            required
            placeholder="phone"
            name="number"
            defaultValue={number}
          />
          <p className={css.btnsWrapper}>
            <button type="submit" className={css.btnSubmit}>
              Ok
            </button>
            <button
              type="button"
              className={css.btnCancel}
              onClick={onToggleModal}
            >
              Cancel
            </button>
          </p>
        </form>
      </div>
    </div>,

    modalRoot
  );
};

export default Modal;
