import React from 'react';
import css from './RegisterView.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const RegisterView = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };
    dispatch(authOperations.register(credentials));
    setName('');
    setPassword('');
    setEmail('');
  };
  return (
    <>
      <h2>Registration page</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Your name:
          <input
            onChange={handleChange}
            type="text"
            placeholder="name"
            name="name"
          />
        </label>
        <label>
          Your password:
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
          />
        </label>
        <label>
          Your email:
          <input
            onChange={handleChange}
            type="text"
            placeholder="email"
            name="email"
          />
        </label>
        <button>Register</button>
      </form>
    </>
  );
};
