import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_EDIT, CHANGE_FILTER } from './actionTypes';

export function addService(name, price, id = null) {
  return { type: ADD_SERVICE, payload: { name, price, id } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function cancelEdit() {
  return { type: CANCEL_EDIT };
}

export function changeFilter(value) {
  console.log('action creators');
  return { type: CHANGE_FILTER, payload: { value } };
}
