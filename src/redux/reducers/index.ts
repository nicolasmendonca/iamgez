import * as counterReducers from './counter';

export interface IStore {
  counterReducer: number;
}

export default {
  ...counterReducers,
};
