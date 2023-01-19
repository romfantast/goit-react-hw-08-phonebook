import React from 'react';
import css from './Filter.module.css';

export const Filter = () => {
  return (
    <div className={css.inputWrapper}>
      <h3>Find contact by name</h3>
      <input type="text" name="filter" />
    </div>
  );
};
