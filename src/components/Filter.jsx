import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../actions/actionCreators';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <input
      type="text"
      placeholder="Поиск по названию"
      value={filter.value}
      onChange={handleChange}
    />
  );
}

export default Filter;