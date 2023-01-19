import React, { useState } from 'react';
import css from '../RegisterView/RegisterView.module.css';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Notify } from 'notiflix';

export const LoginView = () => {
  const [password, setPassword] = useState('5a3820b2d');
  const [email, setEmail] = useState('passatik@gmail.com');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (!email || !password) return Notify.info('All fields are required');
    const credentials = { email, password };
    dispatch(authOperations.logIn(credentials));
    setPassword('');
    setEmail('');
  };

  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Your email:
          <input
            onChange={handleChange}
            type="text"
            placeholder="email"
            name="email"
            value={email}
          />
        </label>
        <label>
          Your password:
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={password}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};
