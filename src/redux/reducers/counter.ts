import { Action } from 'redux';

const initialState = 0;

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'COUNTER_ADD':
      return state + 1;
    case 'COUNTER_SUBTRACT':
      return state - 1;
    default:
      return state;
  }
};
