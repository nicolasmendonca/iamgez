import produce from 'immer';
import { Reducer } from 'redux';
import { IIndexedFile } from '../../services/ReduxImagesService';
import { FILES_ACTIONS } from '../actions/files';
import { ADD_FILES, FILE_PROCESSED } from '../constants/files';

const filesReducerInitialState: IIndexedFile[] = [];
export const filesReducer: Reducer<IIndexedFile[], FILES_ACTIONS> = (
  state = filesReducerInitialState,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_FILES:
        action.payload.forEach((indexedFile) => draft.push(indexedFile));
        break;
      case FILE_PROCESSED:
        const index = draft.findIndex((file) => file.id === action.payload.id);
        draft[index] = action.payload;
        break;
    }
  });
};
