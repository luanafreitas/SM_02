import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import rootReducer from "./reducer";

const INITIAL_STATE = {
 data: []
}

export function search(value) {
  return { type: 'SEARCH', value };
}

const store = createStore(
  books,
  applyMiddleware(thunk, reduxPackMiddleware),
);

export default store;

function books(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {...state, data: [...state.data, action.data]};
      case 'DELETE_ITEM':
      return {
        ...state,
        data: state.data.filter(i => i.id !== action.id)
      }
      case 'SEARCH':
      const item = state.data.filter(response => response.includes(action.title))
      return {...state, } 
      default:
      return state;
  }
}