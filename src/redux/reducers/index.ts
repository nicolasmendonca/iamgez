import { IIndexedFile } from '../../services/ReduxImagesService';
import * as filesReducer from './files';

export interface IStore {
  filesReducer: IIndexedFile[];
}

export default {
  ...filesReducer
};
