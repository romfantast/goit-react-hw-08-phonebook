import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { BiUserCircle } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import Modal from 'components/Modal/Modal';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <>
      <li className={css.contactItem}>
        <p className={css.contactInfoWrapper} onClick={handleToggleModal}>
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
      {isOpenModal && (
        <Modal
          onToggleModal={handleToggleModal}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      )}
    </>
  );
};
