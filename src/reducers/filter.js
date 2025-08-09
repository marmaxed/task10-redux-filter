import { CHANGE_FILTER } from '../actions/actionTypes';

const initialState = '';

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}