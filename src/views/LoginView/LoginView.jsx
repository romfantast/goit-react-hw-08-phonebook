import React, { useState } from 'react';
import css from '../RegisterView/RegisterView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Notify } from 'notiflix';
import { AiFillEye, AiOutlineMail } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import authSelectors from 'redux/auth/auth-selectors';

const LoginView = () => {
  const [type, setType] = useState('password');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isLoadingLogin = useSelector(authSelectors.selectIsLoadingLogin);

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

  const handleShowPass = e => {
    setType('text');
  };
  const handleHidePass = e => {
    setType('password');
  };

  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.inputWrapper}>
          Your email:
          <input
            onChange={handleChange}
            type="text"
            placeholder="email"
            name="email"
            value={email}
          />
          <AiOutlineMail className={css.look_icon} />
        </label>
        <label className={css.inputWrapper}>
          Your password:
          <input
            onChange={handleChange}
            type={type}
            placeholder="password"
            name="password"
            value={password}
          />
          <span>
            <AiFillEye
              className={css.look_icon}
              onMouseEnter={handleShowPass}
              onMouseLeave={handleHidePass}
            />
          </span>
        </label>
        <button>
          Login
          {isLoadingLogin && (
            <RotatingLines
              strokeColor="cornflowerblue"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          )}
        </button>
      </form>
    </>
  );
};

export default LoginView;
