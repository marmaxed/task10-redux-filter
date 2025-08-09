import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const filteredItems = items.filter(service =>
    service.name.toLowerCase().includes(filter.value.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;