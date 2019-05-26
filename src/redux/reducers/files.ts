import produce from 'immer';
import { Reducer } from 'redux';
import { ICompressedFileWithPreview } from '../../services/FileManager';
import { IIndexedFile } from '../../types/files';
import { ADD_FILES } from '../constants/files';

// const filesReducerInitialState: IIndexedFile[] = [];
// export const filesReducer: Reducer<IIndexedFile[], any> = (
//   state = filesReducerInitialState,
//   action
// ) => {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case ADD_FILES:
//         // action.payload.forEach((idFile) => draft.push(idFile));
//         break;
//     }
//   });
// };

const STANDBY = 'STANDBY';
type STANDBY = typeof STANDBY;

const LOADING = 'LOADING';
type LOADING = typeof LOADING;

const ERROR = 'ERROR';
type ERROR = typeof ERROR;

const SUCCESS = 'SUCCESS';
type SUCCESS = typeof SUCCESS;

type processingState = Reducer<IFilesReducerState, any>;

interface IFilesReducerState {
  files: ICompressedFileWithPreview[];
  status: STANDBY | LOADING | ERROR | SUCCESS;
}

const filesReducerInitialState: IFilesReducerState = {
  files: [],
  status: STANDBY
};

export const filesReducer: processingState = (
  state = filesReducerInitialState,
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_FILES':
        draft.status = LOADING;
        break;
    }
  });
};
