import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelEdit } from '../actions/actionCreators';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price, item.id));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} placeholder='Name' />
      <input name='price' onChange={handleChange} value={item.price} placeholder='Price' />
      <button type='submit'>Save</button>
      {item.id && <button type='button' onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default ServiceAdd;
