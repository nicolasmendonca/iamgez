import produce from 'immer';
import { Reducer } from 'redux';
import { IIndexedFile } from '../../types/files';
import { FileActions } from '../actions/files';
import { ADD_FILES } from '../constants/files';

const initialState: IIndexedFile[] = [];

export const filesReducer: Reducer<IIndexedFile[], FileActions> = (
  state = initialState,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_FILES:
        action.payload.forEach((idFile) => draft.push(idFile));
        break;
    }
  });
};
