import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFindFilter } from 'redux/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(setFindFilter(value));
  };

  return (
    <div className={css.inputWrapper}>
      <h3>Find contact by name</h3>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};
